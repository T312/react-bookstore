import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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

const ViewDetails = ({ id }) => {
  console.log(id);
  // const dispatch = useDispatch();

  return (
    <>
      <Helmet title='View Details'>
        <div className='container'>
          <Section>
            <SectionTitle>----</SectionTitle>
            <SectionTitle>Chi tiết đơn hàng</SectionTitle>
            <SectionBody>
              <div className='details'>
                <dic className='details__info'>
                  <div className='details__info__time'>
                    <i className='bx bx-calendar'></i>
                    <span> Thứ 2, 12/12/2022, 12:30 PM</span>
                  </div>
                  <div className='details__info__code'>
                    Mã sản phẩm: <span>1234567890</span>
                  </div>
                </dic>
              </div>
              <div className='items-infor-card'>
                <div className='items-info'>
                  <div className='items-info__card'>
                    <div className='items-info__card__icon'>
                      <i className='bx bxs-user'></i>
                    </div>
                  </div>
                  <div className='items-info__txt'>
                    <div className='items-info__txt__title'>Khách hàng</div>
                    <div className='items-info__txt__infor'>
                      <div className='items-info__txt__infor__name'>
                        Hiếu Lâm
                      </div>

                      <span>
                        <Link to='/'>hieulam@gmail.com</Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='items-info'>
                  <div className='items-info__card'>
                    <div className='items-info__card__icon'>
                      <i className='bx bxs-car'></i>
                    </div>
                  </div>
                  <div className='items-info__txt'>
                    <div className='items-info__txt__title'>
                      Thông tin đặt hàng
                    </div>
                    <div className='items-info__txt__infor'>
                      <div className='items-info__txt__infor-status'>
                        Trạng thái: <span>Đang giao hàng</span>
                      </div>
                      Phương thức thanh toán:
                      <span>Thanh toán khi nhận hàng</span>
                    </div>
                  </div>
                </div>
                <div className='items-info'>
                  <div className='items-info__card'>
                    <div className='items-info__card__icon'>
                      <i className='bx bxs-map'></i>
                    </div>
                  </div>
                  <div className='items-info__txt'>
                    <div className='items-info__txt__title'>
                      Thông tin giao hàng
                    </div>
                    <div className='items-info__txt__infor'>
                      Địa chỉ giao hàng:{" "}
                      <span>Hẻm 43, Đường số 6, quận Gò Vấp, TP.HCM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='detail-product'>
                <div className='order-product'>
                  <table className='order-product__tables'>
                    <tr className='order-product__tables__title'>
                      <th>Sản phẩm</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Tổng tiền</th>
                    </tr>
                    <tr className='order-product__tables__row'>
                      <td className='order-product__tables__image'>
                        <img src={anh} alt='' />
                        <strong> Bạch dạ hành</strong>
                      </td>
                      <td>140.000 đ</td>
                      <td>2</td>
                      <td>280.000 đ</td>
                    </tr>
                    <tr className='order-product__tables__row'>
                      <td className='order-product__tables__image'>
                        <img src={anh} alt='' />
                        <strong> Bạch dạ hành</strong>
                      </td>
                      <td>140.000 đ</td>
                      <td>2</td>
                      <td>280.000 đ</td>
                    </tr>
                    <tr className='order-product__tables__row'>
                      <td className='order-product__tables__image'>
                        <img src={anh} alt='' />
                        <strong> Bạch dạ hành </strong>
                      </td>
                      <td>140.000 đ</td>
                      <td>2</td>
                      <td>280.000 đ</td>
                    </tr>
                  </table>
                </div>
                <div className='order-product__total'>
                  <div className='cart__info'>
                    <div className='cart__info__txt'>
                      <div className='cart__info__txt__price'>
                        <span>Tổng giá sản phẩm:</span>
                        <span>{numberWithCommas(Number(840000))} đ</span>
                      </div>
                      <div className='cart__info__txt__price'>
                        <span>Phí giao hàng:</span>
                        <span>{numberWithCommas(Number(20000))} đ</span>
                      </div>
                      <div className='cart__info__txt__price'>
                        <span>Giảm giá</span>
                        <span>10%</span>
                      </div>

                      <div className='cart__info__txt__price'>
                        <strong>Thành tiền:</strong>
                        <span>{numberWithCommas(Number(774000))} đ</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='order-product__btn'>
                  <Button size='sm'>Hủy đơn</Button>
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
