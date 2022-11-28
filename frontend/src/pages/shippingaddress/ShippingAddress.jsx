import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../../components/helmet/Helmet";
// import Button from "../../components/button/Button";
import Section, {
  SectionTitle,
  SectionBody,
} from "../../components/section/Section";
// import numberWithCommas from "../../utils/numberWithCommas.js";
import "./shipping-address.scss";

import imguser from "../../assets/images/users.png";
import AddressCard from "../../components/address-card/AddressCard";
import { useSelector } from "react-redux";

const ShippingAddress = () => {
  window.scrollTo(0, 0);

  const userInfo = useSelector((state) => state.authUser);
  const { user } = userInfo;
  const { shippingAddress } = user;
  const address = shippingAddress ? shippingAddress : [];
  const date = new Date(user.createdAt);
  return (
    <Helmet title="Profile">
      <div className="container">
        <Section>
          <SectionTitle>---</SectionTitle>
          <SectionTitle>Địa chỉ giao hàng</SectionTitle>
          <SectionBody>
            <div className="profile">
              {/* info card */}
              <div className="profile__info">
                <div className="profile__cover"></div>
                <div className="profile__info__card">
                  <div className="profile__info__avatar">
                    <img src={imguser} alt="avatar" />
                  </div>
                  <div className="profile__info__text">
                    <div className="profile__info__text__username">
                      <h5>
                        <strong>{user.name}</strong>
                      </h5>
                    </div>
                    <div className="profile__info__text__datetime">
                      <span>
                        {" "}
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
                    <Link to="/profile">
                      <div className="profile__setting__btn__item">
                        <button className="btn-item" type="button">
                          Cài đặt tài khoản
                        </button>
                      </div>
                    </Link>
                    {/* <div className='profile__setting__btn__item'>
                      <button className='btn-item' type='button'>
                        Orders List
                        <span className='profile__setting__btn__item__badge'>
                          2
                        </span>
                      </button>
                    </div> */}
                    <div className="profile__setting__btn__item">
                      <button className="btn-item" type="button">
                        Địa chỉ giao hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <AddressCard address={address} />
            </div>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

export default ShippingAddress;
