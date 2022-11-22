import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "../../components/helmet/Helmet";
import Button from "../../components/button/Button";
import Section, {
  SectionTitle,
  SectionBody,
} from "../../components/section/Section";
import { useForm } from "react-hook-form";
import numberWithCommas from "../../utils/numberWithCommas.js";
import "./profile.scss";

import userImage from "../../assets/images/users.png";
import { logoutUser } from "../../features/auth/authSlide";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../features/user/pathAPI";

const Profile = () => {
  window.scrollTo(0, 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userInfo = useSelector((state) => state.userDetails);
  // localStorage.removeItem("user");
  // localStorage.setItem("user", userInfo);
  const user = JSON.parse(localStorage.getItem("user"));
  const date = new Date(user.createdAt); // formated_Date - SDK returned date
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      if (data.confirmPassword == "" && data.password) {
        alert("Mật khẩu chưa hợp lệ");
        return;
      } else if (
        data.confirmPassword &&
        data.password !== data.confirmPassword
      ) {
        alert("Xác thực mật khẩu chưa hợp lệ");
        return;
      } else if (data.confirmPassword == "" && data.password == "") {
        delete data.confirmPassword;
        delete data.password;
      }
      dispatch(updateProfile(data));

      if (userInfo != {}) {
        dispatch(logoutUser());
      }

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Helmet title="Profile">
      <div className="container">
        <Section>
          <SectionTitle>---</SectionTitle>
          <SectionTitle>Tài khoản của tôi</SectionTitle>
          <SectionBody>
            <div className="profile">
              {/* info card */}
              <div className="profile__info">
                <div className="profile__cover"></div>
                <div className="profile__info__card">
                  <div className="profile__info__avatar">
                    <img src={userImage} alt="avatar" />
                  </div>
                  <div className="profile__info__text">
                    <div className="profile__info__text__username">
                      <h5>
                        <strong>{user.name}</strong>
                      </h5>
                    </div>
                    <div className="profile__info__text__datetime">
                      <span>
                        Đã tham gia vào{" "}
                        {`${date.getDate()}/${
                          date.getMonth() + 1
                        }/${date.getFullYear()}`}
                      </span>
                    </div>
                  </div>
                </div>
                {/* tab item */}
                <div className="profile__setting">
                  <div className="profile__setting__btn">
                    <div className="profile__setting__btn__item">
                      <button className="btn-item" type="button">
                        Cài đặt tài khoản
                      </button>
                    </div>
                    {/* <div className='profile__setting__btn__item'>
                      <button className='btn-item' type='button'>
                        Orders List
                        <span className='profile__setting__btn__item__badge'>
                          2
                        </span>
                      </button>
                    </div> */}
                    <Link to="/shipping-address">
                      <div className="profile__setting__btn__item">
                        <button className="btn-item" type="button">
                          Địa chỉ giao hàng
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <form className="form-profile" onSubmit={handleSubmit(onSubmit)}>
                <div className="profile-tab">
                  <div className="profile-tab__form">
                    <div className="profile-tab__form__group">
                      <input
                        type="username"
                        className="profile-tab__form__input"
                        defaultValue={user.name}
                        {...register("name", { required: true })}
                      />
                    </div>
                    <div className="profile-tab__form__group">
                      <input
                        type="email"
                        className="profile-tab__form__input"
                        defaultValue={user.email}
                        {...register("email", { required: true })}
                      />
                    </div>

                    <div className="profile-tab__form__group">
                      <input
                        type="new-password"
                        className="profile-tab__form__input"
                        placeholder="Mật khẩu mới"
                        {...register("password")}
                      />
                    </div>
                    <div className="profile-tab__form__group">
                      <input
                        type="confirm-password"
                        className="profile-tab__form__input"
                        placeholder="Nhập lại mật khẩu"
                        {...register("confirmPassword")}
                      />
                    </div>

                    <div className="profile-tab__form__btn">
                      <Button size="sm" type="submit">
                        Cập nhật
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* <ProfileTabs /> */}
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Đơn hàng của tôi</SectionTitle>
          <SectionBody>
            <table className="table-order">
              <thead>
                <tr>
                  <th>Đơn hàng đã đặt</th>
                  <th>Tổng số tiền</th>
                  <th>Đã thanh toán</th>
                  <th>Đã giao</th>
                  <th>Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12/11/2022 9:30</td>
                  <td>{numberWithCommas(138000)} đ</td>
                  <td>
                    <i
                      className="bx bx-x"
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="bx bx-x"
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <Link to="/">Xem đơn hàng</Link>
                  </td>
                </tr>
                <tr>
                  <td>15/11/2022 12:30</td>
                  <td>{numberWithCommas(138000)} đ</td>
                  <td>
                    <i
                      className="bx bx-x"
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="bx bx-x"
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <Link to="/">Xem đơn hàng</Link>
                  </td>
                </tr>
                <tr>
                  <td>20/11/2022 13:30</td>
                  <td>{numberWithCommas(138000)} đ</td>
                  <td>
                    <i
                      className="bx bx-x"
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="bx bx-x"
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <Link to="/">Xem đơn hàng</Link>
                  </td>
                </tr>
                <tr>
                  <td>21/11/2022 17:00</td>
                  <td>{numberWithCommas(138000)} đ</td>
                  <td>
                    <i
                      className="bx bx-x"
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="bx bx-x"
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <Link to="/">Xem đơn hàng</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

export default Profile;
