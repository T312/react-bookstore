import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { logoutUser } from "../../features/auth/authSlide";
//-------------------------
// import Input from "../../components/input/Input";
// import Button from "../../components/button/Button";

//-------------------------
import userImg from "../../assets/images/users.png";
import "./header.scss";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Products",
    path: "/catalog",
  },
  {
    display: "Accessories",
    path: "/accessories",
  },
  {
    display: "About us",
    path: "/about",
  },
];

const Header = () => {
  const userInfo = useSelector((state) => state.authLogin);
  const { error, loading, user } = userInfo;
  const { pathName } = useLocation();
  const dispatch = useDispatch();
  const activeNav = headerNav.findIndex((e) => e.path === pathName);

  const headerRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");
  const logout = async () => {
    dispatch(logoutUser());
  };

  return (
    <div className='header' ref={headerRef}>
      <div className='container'>
        <div className='header__logo'>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </div>
        <div className='header__menu'>
          <div className='header__menu__mobile-toggle' onClick={menuToggle}>
            <i className='bx bx-menu'></i>
          </div>

          <div className='header__menu__left' ref={menuLeft}>
            <div className='header__menu__left__close' onClick={menuToggle}>
              <i className='bx bx-chevron-left'></i>
            </div>
            {/* <div className='header__menu__left__sign-up'>
              <strong>Đăng ký</strong> (Bạn chưa đăng nhập.)
            </div>
            <div className='header__menu__left__btn'>
              <span className='header__menu__left__login'>
                <i className='bx bxs-user'></i>Đăng nhập
              </span>
              <span className='header__menu__left__cart'>
                <i className='bx bx-cart-alt'></i>Giỏ hàng
              </span>
            </div> */}
            {headerNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item 
                header__menu__left__item
                ${index === activeNav ? "active" : ""}`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className='header__menu__right'>
            <div className='header__menu__item header__menu__right__item'>
              <i className='bx bx-search-alt'></i>
            </div>
            <div className='header__menu__item header__menu__right__item'>
              <Link to='/cart'>
                <i className='bx bx-cart-alt'></i>
              </Link>
            </div>
            {user ? (
              <>
                <div className="header__menu__item header__menu__right__item">
                  <div className="header__menu__right__item__user">
                    <img src={userImg} alt="" />
                    <div className="header__menu__right__item__user-name">
                      {user.name}
                    </div>
                    <div className="header__menu__right__item__dropdown">
                      <i class="bx bxs-down-arrow"></i>

                      <div className="header__menu__right__item__dropdown-list">
                        <div className="header__menu__right__item__dropdown-list__item">
                          <Link to="/profile">Profile</Link>
                        </div>
                        <div
                          onClick={logout}
                          className="header__menu__right__item__dropdown-list__item"
                        >
                          <Link to="/">Logout</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="header__menu__item header__menu__right__item">
                  <Link to="/login">
                    <i className="bx bxs-user"></i>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
