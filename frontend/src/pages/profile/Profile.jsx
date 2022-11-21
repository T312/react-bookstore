import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../../components/helmet/Helmet";
import Button from "../../components/button/Button";
import Section, {
  SectionTitle,
  SectionBody,
} from "../../components/section/Section";
import numberWithCommas from "../../utils/numberWithCommas.js";
import "./profile.scss";

import user from "../../assets/images/users.png";

const Profile = () => {
  window.scrollTo(0, 0);
  return (
    <Helmet title='Profile'>
      <div className='container'>
        <Section>
          <SectionTitle>---</SectionTitle>
          <SectionTitle>My Profile</SectionTitle>
          <SectionBody>
            <div className='profile'>
              {/* info card */}
              <div className='profile__info'>
                <div className='profile__cover'></div>
                <div className='profile__info__card'>
                  <div className='profile__info__avatar'>
                    <img src={user} alt='avatar' />
                  </div>
                  <div className='profile__info__text'>
                    <div className='profile__info__text__username'>
                      <h5>
                        <strong>Long</strong>
                      </h5>
                    </div>
                    <div className='profile__info__text__datetime'>
                      <span> Đã tham gia 12/12/2022</span>
                    </div>
                  </div>
                </div>
                {/* tab item */}
                <div className='profile__setting'>
                  <div className='profile__setting__btn'>
                    <div className='profile__setting__btn__item'>
                      <button className='btn-item' type='button'>
                        Profile Settings
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
                    <Link to='/shipping-address'>
                      <div className='profile__setting__btn__item'>
                        <button className='btn-item' type='button'>
                          Shipping Address
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <form>
                <div className='profile-tab'>
                  <div className='profile-tab__form'>
                    <div className='profile-tab__form__group'>
                      <input
                        type='username'
                        className='profile-tab__form__input'
                        placeholder='Username'
                      />
                    </div>
                    <div className='profile-tab__form__group'>
                      <input
                        type='email'
                        className='profile-tab__form__input'
                        placeholder='Email'
                      />
                    </div>

                    <div className='profile-tab__form__group'>
                      <input
                        type='new-password'
                        className='profile-tab__form__input'
                        placeholder='New Password'
                      />
                    </div>
                    <div className='profile-tab__form__group'>
                      <input
                        type='confirm-password'
                        className='profile-tab__form__input'
                        placeholder='Confirm Password'
                      />
                    </div>

                    <div className='profile-tab__form__btn'>
                      <Button size='sm' type='submit'>
                        Update Profile
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
          <SectionTitle>My Orders</SectionTitle>
          <SectionBody>
            <table className='table-order'>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Paid</th>
                  <th>Delivered</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2:42 PM Nov 20, 2022</td>
                  <td>{numberWithCommas(20000)} đ</td>
                  <td>
                    <i
                      className='bx bx-x'
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <i
                      className='bx bx-x'
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <Link to='/'>Details</Link>
                  </td>
                </tr>
                <tr>
                  <td>2:42 PM Nov 20, 2022</td>
                  <td>{numberWithCommas(20000)} đ</td>
                  <td>
                    <i
                      className='bx bx-x'
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <i
                      className='bx bx-x'
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <Link to='/'>Details</Link>
                  </td>
                </tr>
                <tr>
                  <td>2:42 PM Nov 20, 2022</td>
                  <td>{numberWithCommas(20000)} đ</td>
                  <td>
                    <i
                      className='bx bx-x'
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <i
                      className='bx bx-x'
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <Link to='/'>Details</Link>
                  </td>
                </tr>
                <tr>
                  <td>2:42 PM Nov 20, 2022</td>
                  <td>{numberWithCommas(20000)} đ</td>
                  <td>
                    <i
                      className='bx bx-x'
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <i
                      className='bx bx-x'
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <Link to='/'>Details</Link>
                  </td>
                </tr>
                <tr>
                  <td>2:42 PM Nov 20, 2022</td>
                  <td>{numberWithCommas(20000)} đ</td>
                  <td>
                    <i
                      className='bx bx-x'
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <i
                      className='bx bx-x'
                      style={{ fontSize: "2rem", color: "red" }}
                    ></i>
                  </td>
                  <td>
                    <Link to='/'>Details</Link>
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
