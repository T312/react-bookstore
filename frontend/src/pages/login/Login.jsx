import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// ------------------------------------

import Helmet from "../../components/helmet/Helmet";
import CheckBox from "../../components/checkbox/CheckBox";
import "react-toastify/dist/ReactToastify.css";
// ------------------------------------
import "./login.scss";
import logo from "../../assets/images/logo.png";
import { loginUser, loginGoogleUser } from "../../features/auth/pathAPI";
import { useState } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { toast } from "react-toastify";
const Login = () => {
  const authUser = useSelector((state) => state.authUser);
  const { error, loading } = authUser;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      dispatch(loginUser(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const handleDisplay = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId:
          "288170300659-sjonblesn3c6ukk4old75ksohf48ku7f.apps.googleusercontent.com",
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const handleFailure = (result) => {
    console.log(result);
  };

  const handleLogin = async (googleData) => {
    try {
      dispatch(loginGoogleUser(googleData.tokenId));
      navigate("/");
    } catch (error) {
      toast(error);
    }
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <Helmet title="Login">
          <div className="login">
            <div className="form">
              <Link className="form__logo">
                <img src={logo} alt="" />
              </Link>
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email"
                  required
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {/* {errors.email?.type === "required" && (
                <span className="error-message error-message-user" role="alert">
                  Email is required
                </span>
              )} */}
                <span className="form__input__icon__err">
                  {/* <i className='bx bx-error-circle'></i> */}
                </span>
                <span className="form__input__icon__success">
                  {/* <i className='bx bx-check-circle'></i> */}
                </span>
                <span className="form__input__err__msg"></span>
              </div>
              <div className="form__group">
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form__input"
                  placeholder="Mật khẩu"
                  required
                  {...register("password", { required: true })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && (
                  <span
                    className="error-message error-message-pass"
                    role="alert"
                  >
                    {errors.password?.message}
                  </span>
                )}
                <span className="form__input__icon__err">
                  {/* <i className='bx bx-error-circle'></i> */}
                </span>
                <span className="form__input__con__success">
                  {/* <i className='bx bx-check-circle'></i> */}
                </span>
              </div>

              <div className="form__input__checkbox">
                <input onClick={handleDisplay} type="checkbox" />
                <span>Hiện mật khẩu</span>
              </div>

              <button className="form__btn">Đăng nhập</button>
              <span className="form__delimiter">Hoặc đăng nhập bằng</span>
              <div
                className="form__social"
                style={{ justifyContent: "center" }}
              >
                {/* <Link to="/" className="form__social__item__fb">
                  <i className="bx bxl-facebook"></i>
                </Link>
                <Link className="form__social__item__tw">
                  <i className="bx bxl-twitter"></i>
                </Link> */}
                {/* <Link className='form__social__item__gg'>
                  <i className='bx bxl-google'></i>
                </Link> */}
                <GoogleLogin
                  clientId={
                    "288170300659-sjonblesn3c6ukk4old75ksohf48ku7f.apps.googleusercontent.com"
                  }
                  buttonText="Log in with Google"
                  onSuccess={handleLogin}
                  onFailure={handleFailure}
                  cookiePolicy={"single_host_origin"}
                ></GoogleLogin>
              </div>
              <span className="form__txt">
                Bạn chưa có tài khoản?
                <Link to="/register">
                  <strong> Đăng ký</strong>{" "}
                </Link>
              </span>
              <span className="form__txt">
                <Link>Quên mật khẩu</Link>
              </span>
            </div>
          </div>
          {/* <ToastContainer /> */}
        </Helmet>
      </form>
    </>
  );
};

export default Login;
