import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../../components/helmet/Helmet";
//------------------------------------------------
import "./register.scss";
import logo from "../../assets/images/logo.png";

const Register = () => {
  return (
    <Helmet title='Login'>
      <div className='login'>
        <div className='form'>
          <div className='form__logo'>
            <img src={logo} alt='' />
            <div className='form__welcome'>Register account</div>
          </div>

          <div className='form__group'>
            <input
              type='username'
              className='form__input'
              placeholder='Username'
            />
            <span className='form__input__icon__err'>
              {/* <i className='bx bx-error-circle'></i> */}
            </span>
            <span className='form__input__icon__success'>
              {/* <i className='bx bx-check-circle'></i> */}
            </span>
            <span className='form__input__err__msg'></span>
          </div>
          <div className='form__group'>
            <input type='email' className='form__input' placeholder='Email' />
            <span className='form__input__icon__err'>
              {/* <i className='bx bx-error-circle'></i> */}
            </span>
            <span className='form__input__icon__success'>
              {/* <i className='bx bx-check-circle'></i> */}
            </span>
            <span className='form__input__err__msg'></span>
          </div>
          <div className='form__group'>
            <input
              type='password'
              className='form__input'
              placeholder='Password'
            />
            <span className='form__input__icon__err'>
              {/* <i className='bx bx-error-circle'></i> */}
            </span>
            <span className='form__input__con__success'>
              {/* <i className='bx bx-check-circle'></i> */}
            </span>
          </div>
          <div className='form__group__checkbox'></div>
          <button className='form__btn'>Register</button>
          <span className='form__delimiter'>or connect with</span>
          <div className='form__social'>
            <Link to='/' className='form__social__item__fb'>
              <i className='bx bxl-facebook'></i>
            </Link>
            <Link className='form__social__item__tw'>
              <i className='bx bxl-twitter'></i>
            </Link>
            <Link className='form__social__item__gg'>
              <i className='bx bxl-google'></i>
            </Link>
          </div>
          <span className='form__txt'>
            You have an account!
            <Link to='/login'>
              <strong> Login</strong>
            </Link>
          </span>
        </div>
      </div>
    </Helmet>
  );
};

export default Register;
