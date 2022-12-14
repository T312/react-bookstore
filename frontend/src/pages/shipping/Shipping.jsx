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
  const userInfo = useSelector((state) => state.getUserProfile);
  const { user } = userInfo;
  const { shippingAddress } = user;
  const address = shippingAddress ? shippingAddress : [];

  const cartItems = useSelector((state) => state.cartItems.value); //product in cart
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order } = orderCreate;

  const [cartProducts, setCartProducts] = useState(getCartItemsInfo(cartItems));
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkCash, setCheckCash] = useState("Paypal");
  const [addressDefaut, setaddressDefaut] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setCartProducts(getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);
  const orderItems = [];

  for (var index of cartItems) {
    orderItems.push({
      product: index._id,
      quantity: index.quantity,
    });
  }
  const totalItems = totalPrice;
  const addressDf = addressDefaut ? addressDefaut : address[0];
  const handleOrder = () => {
    dispatch(
      createOrder({
        orderItems: orderItems,
        paymentMethod: checkCash,
        totalPrice: totalPrice * 0.9 + 30000,
        shippingPrice: 30000,
        itemsPrice: totalItems,
        shippingAddress: addressDf,
        isPaid: checkCash === "Paypal" ? true : false,
      })
    );

    localStorage.removeItem("cartItems");
  };

  return (
    <div className="container">
      <Section>
        <SectionTitle>---</SectionTitle>
        <SectionTitle>Th??? t???c thanh to??n</SectionTitle>
        <SectionBody>
          <CheckoutStatus2 />
        </SectionBody>
      </Section>

      <div className="shipping">
        <AddressCard
          address={address}
          setaddressDefaut={(addressDefaut) => {
            setaddressDefaut(addressDefaut);
          }}
        />
        <div className="shipping__info">
          <BillAddress address={addressDf} />
          <div className="shipping__info__txt">
            <Payment
              setCheckCash={(checkCash) => {
                setCheckCash(checkCash);
              }}
            />
            <div className="shipping__info__btn-edit">
              <h2 className="shipping__info__title">Chi ti???t h??a ????n</h2>

              <Link to="/cart">
                <i className="bx bxs-edit-alt"></i>
              </Link>
            </div>
            <hr></hr>
            <p>
              B???n ??ang c?? (<strong>{totalProducts}</strong>) s???n ph???m!
            </p>
            <div className="shipping__info__txt__price">
              <span>T???ng gi?? s???n ph???m</span>
              <span>{numberWithCommas(Number(totalPrice))} ??</span>
            </div>
            <div className="shipping__info__txt__price">
              <span>Gi???m gi??</span>
              <span>{numberWithCommas(Number(10))} % </span>
            </div>
            <div className="shipping__info__txt__price">
              <span>Ph?? ship</span>
              <span>{numberWithCommas(Number(30000))} ??</span>
            </div>
            <hr></hr>
            <div className="shipping__info__txt__price">
              <span>Th??nh ti???n:</span>
              <span>
                {numberWithCommas(Number(totalPrice * 0.9 + 30000))} ??
              </span>
            </div>
          </div>

          <div className="shipping__info__btn">
            <div className="shipping__info__btn__item">
              <Link to="/order-complete">
                <Button onClick={() => handleOrder()} size="sm">
                  Ho??n t???t thanh to??n
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
