import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//----------------------------------
import Button from "../button/Button";
//----------------------------------
import "./product-view.scss";
import numberWithCommas from "../../utils/numberWithCommas.js";
import bachdahanh01 from "../../assets/images/books/bachdahanh01.png";
import bachdahanh02 from "../../assets/images/books/bachdahanh02.png";

const ProductView = (props) => {
  // const product = props.product;
  const [previewImg, setPreviewImg] = useState(bachdahanh01);
  return (
    <div className='product'>
      <div className='product__images'>
        <div className='product__images__list'>
          <div
            className='product__images__list__item'
            onClick={() => setPreviewImg(bachdahanh01)}
          >
            <img src={bachdahanh01} alt='' />
          </div>
          <div
            className='product__images__list__item'
            onClick={() => setPreviewImg(bachdahanh02)}
          >
            <img src={bachdahanh02} alt='' />
          </div>
          <div
            className='product__images__list__item'
            onClick={() => setPreviewImg(bachdahanh01)}
          >
            <img src={bachdahanh01} alt='' />
          </div>
          <div
            className='product__images__list__item'
            onClick={() => setPreviewImg(bachdahanh01)}
          >
            <img src={bachdahanh02} alt='' />
          </div>
        </div>
        <div className='product__images__main'>
          <img src={previewImg} alt='' />
        </div>
        <div className='product-description'>
          <div className='product-description__title'>Mô Tả Sản Phẩm</div>
          <div className='product-description__content'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book,Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book,Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen
            book,Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book,Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book,Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book
          </div>
          <div className='product-description__toggle'>
            <Button size='sm'>Xem thêm</Button>
          </div>
        </div>
      </div>
      {/* ---------------INFO-------------- */}
      <div className='product__info'>
        <h5 className='product__info__author'>
          Tác giả: <span>Daniel Kahneman</span>
        </h5>
        <h1 className='product__info__title'>
          Tư Duy Nhanh Và Chậm (Bản mới nhất 2020)
        </h1>
        <div className='product__info__star'>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
        </div>
        <div className='product__info__review'>
          <Link to='/'>
            (Xem <span>116</span> đánh giá)
          </Link>
        </div>
        <div className='product__info__item'>
          <span className='product__info__item__price'>
            {numberWithCommas(179000)} ₫
          </span>
        </div>
        <div className='product__info__item'>
          <div className='product__info__item__title'>Chia sẽ</div>
          <div className='product__info__item__list'>
            <div className='product__info__item__list__social'>
              <div className='product__info__item__list__social__fb'>
                <i className='bx bxl-facebook-circle'></i>
              </div>
              <div className='product__info__item__list__social__msg'>
                <i className='bx bxl-messenger'></i>
              </div>
              <div className='product__info__item__list__social__ptr'>
                <i className='bx bxl-pinterest'></i>
              </div>
              <div className='product__info__item__list__social__tw'>
                <i className='bx bxl-twitter'></i>
              </div>
              <div className='product__info__item__list__social__link'>
                <i className='bx bx-link-alt'></i>
              </div>
            </div>
          </div>
        </div>
        <div className='product__info__item'>
          <div className='product__info__item__title'>Chính sách đổi trả</div>
          <div className='product__info__item__list'>
            Đổi trả sản phẩm trong 30 ngày
            <div className='product__info__item__list__more'>Xem thêm</div>
          </div>
        </div>
        <div className='product__info__item'>
          <div className='product__info__item__title'>Số lượng</div>
          <div className='product__info__item__quantity'>
            <div className='product__info__item__quantity__btn'>
              <i className='bx bx-minus'></i>
            </div>
            <div className='product__info__item__quantity__input'></div>
            <div className='product__info__item__quantity__btn'>
              <i className='bx bx-plus'></i>
            </div>
          </div>
        </div>
        <div className='product__info__item'>
          <Button>
            <i className='bx bx-cart-alt product__info__item__cart'></i>
            thêm vào giỏ hàng
          </Button>
          <Button>mua ngay</Button>
        </div>
      </div>
      <div className='product-description mobile'>
        <div className='product-description__title'>Mô Tả Sản Phẩm</div>
        <div className='product-description__content'></div>
        <div className='product-description__toggle'>
          <Button size='sm'>Xem thêm</Button>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductView;
