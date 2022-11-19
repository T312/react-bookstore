import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Helmet from "../../components/helmet/Helmet";
import CartItem from "../../components/cartitem/CartItem";
import Button from "../../components/button/Button";
import numberWithCommas from "../../utils/numberWithCommas";
import { getCartItemsInfo } from "../../features/cart/pathAPI";
import "./cart.scss";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState(getCartItemsInfo(cartItems));

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0,
      ),
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0),
    );
  }, [cartItems]);

  return (
    <Helmet title='Giỏ hàng'>
      <div className='container'>
        <div className='cart'>
          <div className='cart__info'>
            <div className='cart__info__txt'>
              <p>
                Bạn đang có (<strong>{totalProducts}</strong>) sản phẩm trong
                giỏ hàng
              </p>
              <div className='cart__info__txt__price'>
                <span>Thành tiền:</span>{" "}
                <span>{numberWithCommas(Number(totalPrice))} đ</span>
              </div>
            </div>
            <div className='cart__info__btn'>
              <Button size='block'>Đặt hàng</Button>

              <Link to='/catalog'>
                <Button size='block'>Tiếp tục mua hàng</Button>
              </Link>
            </div>
          </div>
          <div className='cart__list'>
            {cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
