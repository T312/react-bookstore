import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AddressCard from "../../components/address-card/AddressCard";
import CheckoutStatus from "../../components/checkout-status/CheckoutStatus";
import Section, {
  SectionTitle,
  SectionBody,
} from "../../components/section/Section";
import "./shipping.scss";
import numberWithCommas from "../../utils/numberWithCommas";
import Button from "../../components/button/Button";
import { getCartItemsInfo } from "../../features/cart/pathAPI";
import BillAddress from "../../components/bill-address/BillAddress";
import Payment from "../../components/payment/Payment";

const Shipping = () => {
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
    <div className='container'>
      <Section>
        <SectionTitle>---</SectionTitle>
        <SectionTitle>Thủ thục thanh toán</SectionTitle>
        <SectionBody>
          <CheckoutStatus />
        </SectionBody>
      </Section>

      <div className='shipping'>
        <AddressCard />
        <div className='shipping__info'>
          <BillAddress />
          <div className='shipping__info__txt'>
            <Payment />
            <div className='shipping__info__btn-edit'>
              <h2 className='shipping__info__title'>Chi tiết hóa đơn</h2>

              <Link to='/cart'>
                <i className='bx bxs-edit-alt'></i>
              </Link>
            </div>
            <hr></hr>
            <p>
              Bạn đang có (<strong>{totalProducts}</strong>) sản phẩm!
            </p>
            <div className='shipping__info__txt__price'>
              <span>Tổng giá sản phẩm</span>
              <span>{numberWithCommas(Number(totalPrice))} đ</span>
            </div>
            <div className='shipping__info__txt__price'>
              <span>Giảm giá</span>
              <span>{numberWithCommas(Number(0))} % </span>
            </div>
            <div className='shipping__info__txt__price'>
              <span>Phí ship</span>
              <span>{numberWithCommas(Number(0))} đ</span>
            </div>
            <hr></hr>
            <div className='shipping__info__txt__price'>
              <span>Thành tiền:</span>
              <span>{numberWithCommas(Number(totalPrice))} đ</span>
            </div>
          </div>

          <div className='shipping__info__btn'>
            <div className='shipping__info__btn__item'>
              <Link to='/place-order'>
                <Button size='sm'>Hoàn tất thanh toán</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
