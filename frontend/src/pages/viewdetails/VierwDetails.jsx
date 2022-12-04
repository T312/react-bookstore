import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//------------------------
import Helmet from "../../components/helmet/Helmet";
import Section, {
  SectionTitle,
  SectionBody,
} from "../../components/section/Section";
//-------------------------
import "./view-details.scss";
import { useSelector } from "react-redux";
import anh from "../../assets/images/books/bachdahanh01.png";
import numberWithCommas from "../../utils/numberWithCommas";
import { useDispatch } from "react-redux";
import Button from "../../components/button/Button";
import { getOrderDetail } from "../../features/order/pathAPI";
import moment from "moment";
import { cancelOrder } from "../../features/order/pathAPI";
const ViewDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderDetail(id));
  }, [dispatch, id]);
  const orderDetail = useSelector((state) => state.orderDetail);
  const { order } = orderDetail;
  const orderCheck = order
    ? order
    : {
        _id: "",
        createdAt: "",
        status: "",
        user: {},
        shippingAddress: { address: "", phoneNumber: "" },
        paymentMethod: "",
        orderItems: [],
      };
  const handleCancelOrder = () => {
    dispatch(cancelOrder(id));
    setTimeout(() => {
      dispatch(getOrderDetail(id));
    }, 1000);
  };
  // const orderItems = order.orderItems ? order.orderItems : [];
  return (
    <>
      <Helmet title="View Details">
        <div className="container">
          <Section>
            <SectionTitle>----</SectionTitle>
            <SectionTitle>Chi tiết đơn hàng</SectionTitle>
            <SectionBody>
              <div className="details">
                <dic className="details__info">
                  <div className="details__info__time">
                    <i className="bx bx-calendar"></i>
                    <span> {moment(orderCheck.createdAt).format("llll")}</span>
                  </div>
                  <div className="details__info__code">
                    Mã sản phẩm: <span>{orderCheck._id}</span>
                  </div>
                </dic>
              </div>
              <div className="items-infor-card">
                <div className="items-info">
                  <div className="items-info__card">
                    <div className="items-info__card__icon">
                      <i className="bx bxs-user"></i>
                    </div>
                  </div>
                  <div className="items-info__txt">
                    <div className="items-info__txt__title">Khách hàng</div>
                    <div className="items-info__txt__infor">
                      <div className="items-info__txt__infor__name">
                        {orderCheck.user.name}
                      </div>

                      <span>
                        <Link to="/">{orderCheck.user.email}</Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="items-info">
                  <div className="items-info__card">
                    <div className="items-info__card__icon">
                      <i className="bx bxs-car"></i>
                    </div>
                  </div>
                  <div className="items-info__txt">
                    <div className="items-info__txt__title">
                      Thông tin đặt hàng
                    </div>
                    <div className="items-info__txt__infor">
                      <div className="items-info__txt__infor-status">
                        Trạng thái: <span>{orderCheck.status}</span>
                      </div>
                      Phương thức thanh toán:
                      <span>{orderCheck.paymentMethod}</span>
                    </div>
                  </div>
                </div>
                <div className="items-info">
                  <div className="items-info__card">
                    <div className="items-info__card__icon">
                      <i className="bx bxs-map"></i>
                    </div>
                  </div>
                  <div className="items-info__txt">
                    <div className="items-info__txt__title">
                      Thông tin giao hàng
                    </div>
                    <div className="items-info__txt__infor">
                      Địa chỉ giao hàng:{" "}
                      <span>{orderCheck.shippingAddress.address}</span>
                    </div>
                    <div className="items-info__txt__infor">
                      Số điện thoại:{" "}
                      <span>{orderCheck.shippingAddress.phoneNumber}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detail-product">
                <div className="order-product">
                  <table className="order-product__tables">
                    <tr className="order-product__tables__title">
                      <th>Sản phẩm</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Tổng tiền</th>
                    </tr>
                    {orderCheck.orderItems.map((item) => {
                      return (
                        <>
                          <tr
                            className="order-product__tables__row"
                            key={item.id}
                          >
                            <td className="order-product__tables__image">
                              <img
                                src={item.product.descriptionImages[0].link}
                                alt=""
                              />
                              <strong> {item.product.name}</strong>
                            </td>
                            <td>{numberWithCommas(item.product.price)} đ</td>
                            <td>{item.quantity}</td>
                            <td>
                              {numberWithCommas(
                                item.product.price * item.quantity
                              )}{" "}
                              đ
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </table>
                </div>
                <div className="order-product__total">
                  <div className="cart__info">
                    <div className="cart__info__txt">
                      <div className="cart__info__txt__price">
                        <span>Tổng giá sản phẩm:</span>
                        <span>{numberWithCommas(orderCheck.itemsPrice)} đ</span>
                      </div>
                      <div className="cart__info__txt__price">
                        <span>Phí giao hàng:</span>
                        <span>
                          {numberWithCommas(orderCheck.shippingPrice)} đ
                        </span>
                      </div>
                      <div className="cart__info__txt__price">
                        <span>Giảm giá</span>
                        <span>
                          {numberWithCommas(orderCheck.itemsPrice * 0.1)} đ
                        </span>
                      </div>

                      <div className="cart__info__txt__price">
                        <strong>Thành tiền:</strong>
                        <span>
                          {" "}
                          {numberWithCommas(orderCheck.totalPrice)} đ
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {orderCheck.status === "Chờ xác nhận" ||
                orderCheck.status === "Chờ lấy hàng" ? (
                  <>
                    {" "}
                    <div className="order-product__btn">
                      <Button size="sm" onClick={handleCancelOrder}>
                        Hủy đơn
                      </Button>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </SectionBody>
          </Section>
        </div>
      </Helmet>
    </>
  );
};

export default ViewDetails;
