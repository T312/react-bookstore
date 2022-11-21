import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../../components/helmet/Helmet";
import Button from "../../components/button/Button";
import Section, {
  SectionTitle,
  SectionBody,
} from "../../components/section/Section";
import numberWithCommas from "../../utils/numberWithCommas.js";
import "./shipping-address.scss";

import user from "../../assets/images/users.png";

const ShippingAddress = () => {
  window.scrollTo(0, 0);
  return (
    <Helmet title='Profile'>
      <div className='container'>
        <Section>
          <SectionTitle>---</SectionTitle>
          <SectionTitle>Shipping Address</SectionTitle>
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
                    <Link to='/profile'>
                      <div className='profile__setting__btn__item'>
                        <button className='btn-item' type='button'>
                          Profile Settings
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
                    <div className='profile__setting__btn__item'>
                      <button className='btn-item' type='button'>
                        Shipping Address
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

export default ShippingAddress;
