import React from "react";
import PropTypes from "prop-types";

import numberWithCommas from "../utils/numberWithCommas";
import { Link } from "react-router-dom";

const CartItem = (props) => {
  return (
    <div className='cart__item'>
      <div className='cart__item__image'>
        <img src='' alt='' />
      </div>
      <div className='cart__item__info'>
        <div className='cart__item__info__name'>
          <Link to={`/catalog/`}>
            {/* {`${item.product.title} - ${item.color} - ${item.size}`} */}
          </Link>
        </div>
        <div className='cart__item__info__price'>
          12121
          {/* {numberWithCommas(item.price)}
                </div> */}
          <div className='cart__item__info__quantity'>
            <div className='product__info__item__quantity'>
              <div className='product__info__item__quantity__btn'>
                <i className='bx bx-minus'></i>
              </div>
              <div className='product__info__item__quantity__input'>
                {/* {quantity} */}12
              </div>
              <div className='product__info__item__quantity__btn'>
                <i className='bx bx-plus'></i>
              </div>
            </div>
          </div>
          <div className='cart__item__del'>
            <i className='bx bx-trash'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
