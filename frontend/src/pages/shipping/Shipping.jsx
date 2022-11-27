import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddressCard from "../../components/address-card/AddressCard";
import CheckoutStatus2 from "../../components/checkout-status/CheckoutStatus2";
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
// ------------------------------------
import { createOrder } from "../../features/order/pathAPI";
const Shipping = () => {
  const cartItems = useSelector((state) => state.cartItems.value); //product in cart
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order } = orderCreate;
  // console.log("order: ", order);

  const [cartProducts, setCartProducts] = useState(getCartItemsInfo(cartItems));
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkCash, setCheckCash] = useState("Paypal");
  const shippingAddress = {
    address: "134 Lê Đức Thọ",
    city: "Hồ Chí Minh",
    country: "Việt Nam",
  };

  const dispatch = useDispatch();

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
  const orderItems = [];
  for (var index of cartItems) {
    orderItems.push({
      product: index._id,
      quantity: index.quantity,
    });
  }

  const handleOrder = () => {
    dispatch(
      createOrder({
        orderItems: orderItems,
        paymentMethod: checkCash,
        totalPrice: totalPrice * 0.9 + 30000,
        itemsPrice: totalPrice,
        shippingAddress: shippingAddress,
        isPaid: checkCash == "Paypal" ? true : false,
      }),
    );
  };
  useEffect(() => {
    localStorage.removeItem("cartItems");
  }, []);
  return (
    <div className='container'>
      <Section>
        <SectionTitle>---</SectionTitle>
        <SectionTitle>Thủ thục thanh toán</SectionTitle>
        <SectionBody>
          <CheckoutStatus2 />
        </SectionBody>
      </Section>

      <div className='shipping'>
        <AddressCard />
        <div className='shipping__info'>
          <BillAddress />
          <div className='shipping__info__txt'>
            <Payment
              setCheckCash={(checkCash) => {
                setCheckCash(checkCash);
              }}
            />
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
              <span>{numberWithCommas(Number(10))} % </span>
            </div>
            <div className='shipping__info__txt__price'>
              <span>Phí ship</span>
              <span>{numberWithCommas(Number(30000))} đ</span>
            </div>
            <hr></hr>
            <div className='shipping__info__txt__price'>
              <span>Thành tiền:</span>
              <span>
                {numberWithCommas(Number(totalPrice * 0.9 + 30000))} đ
              </span>
            </div>
          </div>

          <div className='shipping__info__btn'>
            <div className='shipping__info__btn__item'>
              <Link to='/order-complete'>
                <Button onClick={() => handleOrder()} size='sm'>
                  Hoàn tất thanh toán
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
