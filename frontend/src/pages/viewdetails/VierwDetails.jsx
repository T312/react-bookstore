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
              {/* Tiêu đề */}
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
              {/* Thông tin khách hàng */}
              <div className="details-info">
                <div className="details-info__text">
                  <p>
                    Tên người đặt hàng:{" "}
                    <strong>
                      Gia Long
                      {/* {checkOrderId.user.name} */}
                    </strong>
                  </p>
                  <p>
                    Email:{" "}
                    <strong>
                      test@gmail.com
                      {/* {checkOrderId.user.email} */}
                    </strong>
                  </p>
                </div>
                <div className="details-info__text">
                  <p>
                    Đang chuyển hàng tới: <strong>Viet Nam</strong>
                  </p>
                  <p>
                    Phương thức thanh toán:{" "}
                    <strong>
                      {/* {checkOrderId.paymentMethod} */}
                      By Cash
                    </strong>
                  </p>
                </div>
                <div className="details-info__text">
                  <p>
                    Địa chỉ:
                    <strong>
                      Lê Đức Thọ, GV
                      {/* {checkOrderId.shippingAddress.address} */}
                    </strong>
                  </p>
                  <p>
                    Số điện thoại: <strong>123123</strong>
                  </p>
                </div>
              </div>
              {/* Sản phẩm đã mua */}
              <div className="cart">
                {/* Thông tin sản phẩm */}
                <div className="cart__list">
                  <div className="cart__item">
                    <div className="cart__item__image">
                      <img src={anh} alt="" />
                    </div>
                    <div className="cart__item__info">
                      <div className="cart__item__info__name">
                        <strong>Bạch dạ hành</strong>
                      </div>
                      <div className="cart__item__info__price">
                        Giá: <span>{numberWithCommas(140000)} đ</span>
                      </div>
                      <div className="cart__item__info__price">Số lượng: 1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart__info">
                <div className="cart__info__txt">
                  <p>
                    Bạn đã đặt (<strong>6</strong>) sản phẩm từ của hàng
                  </p>

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

                  <div className="cart__info__txt__price">
                    <strong>Tổng tiền</strong>
                    <span>{numberWithCommas(Number(12))} đ</span>
                  </div>
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
