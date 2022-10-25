import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//---------------------
import Button from "../button/Button";

//---------------------
import "./product-card.scss";

const ProductCard = (props) => {
  return (
    <div className='product-card'>
      <Link>
        <div className='product-card__image'>
          <img src={props.image} alt='' />
        </div>
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
