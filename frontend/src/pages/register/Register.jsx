import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Helmet from "../../components/helmet/Helmet";
//------------------------------------------------
import "./register.scss";
import logo from "../../assets/images/logo.png";
import { registerUser } from "../../features/auth/pathAPI";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { registerGoogleUser } from "../../features/auth/pathAPI";
import { toast } from "react-toastify";
const Register = () => {
  const { register, handleSubmit } = useForm();
  const userInfo = useSelector((state) => state.authUser);
  const { error, loading, user } = userInfo;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      dispatch(registerUser(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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

  const handleSignup = async (googleData) => {
    try {
      dispatch(registerGoogleUser(googleData.tokenId));
      navigate("/");
    } catch (error) {}
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <Helmet title="Register">
        <div className="login">
          <div className="form">
            <div className="form__logo">
              <img src={logo} alt="" />
              <div className="form__welcome">Đăng ký tài khoản</div>
            </div>

            <div className="form__group">
              <input
                type="username"
                className="form__input"
                placeholder="Tên tài khoản"
                {...register("name", { required: true })}
              />
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
                type="email"
                className="form__input"
                placeholder="Email"
                {...register("email", { required: true })}
              />
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
                type="password"
                className="form__input"
                placeholder="Mật khẩu"
                {...register("password", { required: true })}
              />
              <span className="form__input__icon__err">
                {/* <i className='bx bx-error-circle'></i> */}
              </span>
              <span className="form__input__con__success">
                {/* <i className='bx bx-check-circle'></i> */}
              </span>
            </div>
            <div className="form__group__checkbox"></div>
            <button className="form__btn">Đăng ký</button>
            <span className="form__delimiter">Hoặc đăng nhập bằng</span>
            <div className="form__social" style={{ justifyContent: "center" }}>
              <GoogleLogin
                clientId={
                  "288170300659-sjonblesn3c6ukk4old75ksohf48ku7f.apps.googleusercontent.com"
                }
                buttonText="Sign up with Google"
                onSuccess={handleSignup}
                onFailure={handleFailure}
                cookiePolicy={"single_host_origin"}
              ></GoogleLogin>
            </div>
            <span className="form__txt">
              Bạn đã có tài khoản!
              <Link to="/login">
                <strong> Đăng nhập</strong>
              </Link>
            </span>
          </div>
        </div>
      </Helmet>
    </form>
  );
};

export default Register;
