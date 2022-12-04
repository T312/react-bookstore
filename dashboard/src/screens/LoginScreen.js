import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/LoadingError/Loading";
import Toast from "../components/LoadingError/Toast";
import { login } from "../Redux/Actions/userActions";
import Message from "../components/LoadingError/Error";
import Image from "../assets/images/logo.png";
const Login = ({ history }) => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      history.push("/");
    }
    // history.push("/ship");
  }, [userInfo, history]);

  useEffect(() => {
    if (userInfo && userInfo.isShiper) {
      history.push("/ship");
    }
  }, [userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      <Toast />
      <div
        className='card shadow mx-auto'
        style={{ maxWidth: "380px", marginTop: "100px" }}
      >
        <div className='card-body'>
          {error && <Message variant='alert-danger'>{error}</Message>}
          {loading && <Loading />}

          <img
            className='card-title mb-4 text-center image-login'
            src={Image}
          />
          <form onSubmit={submitHandler}>
            <div className='mb-3'>
              <input
                className='form-control'
                placeholder='Email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <input
                className='form-control'
                placeholder='Password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <button type='submit' className='btn btn-primary w-100'>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
