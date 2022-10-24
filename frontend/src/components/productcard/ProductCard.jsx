import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//---------------------
import Button from "../button/Button";
import numberWithCommas from "../../utils/numberWithCommas";
//---------------------
import "./product-card.scss";

const ProductCard = (props) => {
  return (
    <div className='product-card'>
      <Link>
        <div className='product-card__image'>
          <img src={props.image} alt='' />
          <div className='product-card__wrap-list-icon'>
            <span>
              <i className='bx bx-share-alt'></i>
            </span>
            <span>
              <i className='bx bx-cart'></i>
            </span>
            <span>
              <i className='bx bx-heart'></i>
            </span>
          </div>
        </div>

        <h3 className='product-card__name'>{props.name}</h3>
        <span className='product-card__author'>By: {props.author}</span>
        <span className='product-card__star'>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
        </span>
        <div className='product-card__price'>
          {numberWithCommas(props.price)} ₫
          <span className='product-card__price__old'>
            <del> {numberWithCommas(179000)} ₫</del>
          </span>
        </div>
      </Link>
      <div className='product-card__btn'>
        <Button size='sm' icon='bx bx-cart-alt' animate={true}>
          chọn mua
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
