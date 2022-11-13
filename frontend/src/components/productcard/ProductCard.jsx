import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/productmodal/productModalSlice";
import "./product-card.scss";

//---------------------
import Button from "../button/Button";
import numberWithCommas from "../../utils/numberWithCommas";
//---------------------

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const image = product.descriptionImages
    ? product.descriptionImages[0].link
    : [];
  return (
    <div className='product-card'>
      <Link to={`/product/${product.id}`}>
        <div className='product-card__image'>
          <img src={image} alt='' />
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

        <h3 className='product-card__name'>{product.name}</h3>
        {/* <span className='product-card__author'>By: {props.author}</span> */}
        <span className='product-card__star'>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
        </span>
        <div className='product-card__price'>
          {numberWithCommas(product.price - product.price * 0.1)} ₫
          <span className='product-card__price__old'>
            <del>{numberWithCommas(product.price)} ₫</del>
          </span>
        </div>
      </Link>

      <div className='product-card__btn'>
        <Button
          size='sm'
          icon='bx bx-cart-alt'
          animate={true}
          onClick={() => dispatch(openModal(product.id))}
        >
          chọn mua
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  descriptionImages: PropTypes.shape({
    link: PropTypes.string.isRequired,
    image_id: PropTypes.string.isRequired,
    // _id: PropTypes.string.isRequired,
  }),
  name: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
};

export default ProductCard;
