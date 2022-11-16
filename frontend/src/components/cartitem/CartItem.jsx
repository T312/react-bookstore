import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { addToCart } from "../../features/cart/pathAPI";
// import { removeFromCart } from "../../features/cart/cartSlice";
import { updateItem, removeItem } from "../../features/cart/cartSlice";
// --------------------------------------------------
import numberWithCommas from "../../utils/numberWithCommas";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const itemRef = useRef(null);

  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.quantity);

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const updateQuantity = (opt) => {
    if (opt === "+") {
      dispatch(updateItem({ ...item, quantity: quantity + 1 }));
    }
    if (opt === "-") {
      dispatch(
        updateItem({
          ...item,
          quantity: quantity - 1 === 0 ? 1 : quantity - 1,
        }),
      );
    }
  };

  // const updateCartItem = () => {
  //     dispatch(updateItem({...item, quantity: quantity}))
  // }

  const removeCartItem = () => {
    console.log("removeCartItem");
    dispatch(removeItem(item));
  };

  // const imageMain = item.descriptionImages
  //   ? item.descriptionImages[0].link
  //   : [];
  console.log("object:", item.descriptionImages);
  return (
    <div className='cart__item' ref={itemRef}>
      <div className='cart__item__image'>
        <img src='' alt='' />
      </div>
      <div className='cart__item__info'>
        <div className='cart__item__info__name'>
          <Link to={`/catalog/${item.name}`}>
            {`${item.name} - ${item.author}`}
          </Link>
        </div>
        <div className='cart__item__info__price'>
          {numberWithCommas(item.price)}
        </div>
        <div className='cart__item__info__quantity'>
          <div className='product__info__item__quantity'>
            <div
              className='product__info__item__quantity__btn'
              onClick={() => updateQuantity("-")}
            >
              <i className='bx bx-minus'></i>
            </div>
            <div className='product__info__item__quantity__input'>
              {quantity}
            </div>
            <div
              className='product__info__item__quantity__btn'
              onClick={() => updateQuantity("+")}
            >
              <i className='bx bx-plus'></i>
            </div>
          </div>
        </div>
        <div className='cart__item__del'>
          <i className='bx bx-trash' onClick={() => removeCartItem()}></i>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
