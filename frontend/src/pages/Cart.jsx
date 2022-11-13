import React from "react";
import Helmet from "../components/helmet/Helmet";
// import CartItem from "../components/cartitem/CartItem";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";
import "../scss/components/cart.scss";
const Cart = () => {
  return (
    <Helmet title='Giỏ hàng'>
      <div className='container'>
        <div className='cart'>
          <div className='cart__info'>
            <div className='cart__info__txt'>
              <p>Bạn đang có 5 sản phẩm trong giỏ hàng</p>
              <div className='cart__info__txt__price'>
                <span>Thành tiền:</span> <span>121212</span>
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
            {/* {
                    cartProducts.map((item, index) => (
                        <CartItem item={item} key={index}/>
                    ))
                } */}
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
