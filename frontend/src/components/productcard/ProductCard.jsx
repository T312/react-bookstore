import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./product-card.scss";
//---------------------
import Button from "../button/Button";
import numberWithCommas from "../../utils/numberWithCommas";
import { listProduct } from "../../redux/actions/ProductActions";

//---------------------

const ProductCard = ({ product }) => {
  // const dispatch = useDispatch();

  // const productList = useSelector((state) => state.productList);
  // const { products } = productList;

  // useEffect(() => {
  //   dispatch(listProduct());
  // }, [dispatch]);

  return (
    <div className='product-card'>
      <Link to={`/catalog/${product.id}`} key={product.id}>
        <div className='product-card__image'>
          <img src={product.descriptionImages[0].link} alt='' />
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
          {numberWithCommas(product.price)} ₫
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
  descriptionImages: PropTypes.shape({
    link: PropTypes.string.isRequired,
    image_id: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }),
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
