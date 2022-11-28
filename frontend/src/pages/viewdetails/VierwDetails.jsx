import React, { useEffect } from "react";
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
import { detailsOrder } from "../../features/order/pathAPI";

const ViewDetails = ({ orderId }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Helmet title="View Details">
        <div className="container">
          <Section>
            <SectionTitle>----</SectionTitle>
            <SectionTitle>Chi tiết đơn hàng</SectionTitle>
            <SectionBody>
              <div className="view-details">
                <div className="view-details__customer-info">
                  <div className="view-details__customer-info__title">
                    Khách hàng
                  </div>
                </div>
                <div className="view-details__order-info">
                  <div className="view-details__customer-info__title">
                    Thông tin đặt hàng
                  </div>
                </div>

                <div className="view-details__deliver-info">
                  <div className="view-details__customer-info__title">
                    Thông tin giao hàng
                  </div>
                </div>
              </div>
              <div className="details-info">
                <div className="details-info__text">
                  <p>
                    Tên người đặt hàng <strong>{checkOrderId.user.name}</strong>
                  </p>
                  <p>{checkOrderId.user.email}</p>
                </div>
                <div className="details-info__text">
                  <p>
                    Đang chuyển hàng tới <strong>Viet Nam</strong>
                  </p>
                  <p>
                    Phương thức thanh toán{" "}
                    <strong>{checkOrderId.paymentMethod}</strong>
                  </p>
                </div>
                <div className="details-info__text">
                  <p>
                    Địa chỉ{" "}
                    <strong>{checkOrderId.shippingAddress.address}</strong>
                  </p>
                  <p>
                    Số điện thoại <strong>123123</strong>
                  </p>
                </div>
              </div>

              <div className="cart">
                <div className="cart__info">
                  <div className="cart__info__txt">
                    <p>
                      Bạn đã đặt (<strong>6</strong>) sản phẩm từ của hàng
                    </p>
                    <hr style={{ width: "500px" }}></hr>
                    <div className="cart__info__txt__price">
                      <span>Tổng giá sản phẩm</span>
                      <span>{numberWithCommas(Number(12))} đ</span>
                    </div>
                    <div className="cart__info__txt__price">
                      <span>Giảm giá</span>
                      <span>{numberWithCommas(Number(12))} đ</span>
                    </div>
                    <div className="cart__info__txt__price">
                      <span>Phí ship</span>
                      <span>{numberWithCommas(Number(12))} đ</span>
                    </div>
                    <hr style={{ width: "500px" }}></hr>
                    <div className="cart__info__txt__price">
                      <span>Tổng tiền</span>
                      <span>
                        {/* {numberWithCommas(Number(checkOrderId.totalPrice))} đ */}
                      </span>
                    </div>
                  </div>
                  {/* {checkOrderId.orderItems.map((item) => {
                const img = item.product.descriptionImages[0];
                return ( */}
                  <>
                    <div className="cart__list">
                      <div className="cart__item">
                        <div className="cart__item__image">
                          <img src={img} alt="" />
                        </div>
                        <div className="cart__item__info">
                          <div className="cart__item__info__name">
                            {/* <strong>{item.product.name}</strong> */}
                          </div>
                          <div className="cart__item__info__price">
                            Giá -
                            <strong>
                              {" "}
                              {/* {numberWithCommas(item.product.price)} đ */}
                            </strong>
                          </div>
                          <div className="cart__item__info__price">
                            {/* Số lượng - {item.quantity} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                  {/* );
              })} */}
                  {/* <div className='tbl-order'>
                <table className='tbl-order__tbl'>
                  <tbody>
                    <tr className='tbl-order__tbl__rows'>
                      <td className='tbl-order__tbl__bd'>
                        <strong>Tổng giá sản phẩm</strong>
                      </td>
                      <td className='tbl-order__tbl__bd'>3121232</td>
                    </tr>
                    <tr className='tbl-order__tbl__rows'>
                      <td className='tbl-order__tbl__bd'></td>
                      <strong>Giảm giá</strong>
                      </td>
                      <td className='tbl-order__tbl__bd'>10%</td>
                    </tr>
                    <tr className='tbl-order__tbl__rows'>
                      <td className='tbl-order__tbl__bd'>
                        <strong>Phí ship</strong>
                      </td>
                      <td className='tbl-order__tbl__bd'>3000</td>
                    </tr>
                    <tr className='tbl-order__tbl__rows'>
                      <td className='tbl-order__tbl__total'>
                        <strong>Tổng tiền</strong>
                      </td>
                      <td className='tbl-order__tbl__total'>1232232</td>
                    </tr>
                  </tbody>
                </table>
              </div> */}
                </div>
              </div>
            </SectionBody>
          </Section>
        </div>
      </Helmet>
    </>
  );
};

export default ViewDetails;
