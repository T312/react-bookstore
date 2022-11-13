import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//----------------------------------
import Button from "../button/Button";

//----------------------------------
import "./product-view.scss";
import numberWithCommas from "../../utils/numberWithCommas.js";

const ProductView = (props) => {
  const { product } = props;

  if (product === undefined) {
  }

  const imageMain = product.descriptionImages
    ? product.descriptionImages[0].link
    : [];
  const imageDesc1 = product.descriptionImages
    ? product.descriptionImages[1].link
    : [];
  const imageDesc2 = product.descriptionImages
    ? product.descriptionImages[2].link
    : [];

  const [previewImg, setPreviewImg] = useState(imageMain);
  useEffect(() => {
    setPreviewImg(imageMain);
  }, [product]);
  return (
    <div key={product.id} className='product'>
      <div className='product__images'>
        <div className='product__images__list'>
          <div
            className='product__images__list__item'
            onClick={() => setPreviewImg(imageMain)}
          >
            <img src={imageMain} alt='' />
          </div>
          <div
            className='product__images__list__item'
            onClick={() => setPreviewImg(imageDesc1)}
          >
            <img src={imageDesc1} alt='' />
          </div>
          <div
            className='product__images__list__item'
            onClick={() => setPreviewImg(imageDesc2)}
          >
            <img src={imageDesc2} alt='' />
          </div>
          <div
            className='product__images__list__item'
            onClick={() => setPreviewImg(imageMain)}
          >
            <img src={imageMain} alt='' />
          </div>
        </div>
        <div className='product__images__main'>
          <img src={previewImg} alt='' />
        </div>
        <div className='product-description'>
          <div className='product-description__title'>Mô Tả Sản Phẩm</div>
          <div className='product-description__content'>
            {product.description}
          </div>
          <div className='product-description__toggle'>
            <Button size='sm'>Xem thêm</Button>
          </div>
        </div>
      </div>
      {/* ---------------INFO-------------- */}
      <div className='product__info'>
        <h5 className='product__info__author'>
          Tác giả: <span>{product.author}</span>
        </h5>
        <h1 className='product__info__title'>{product.name}</h1>
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

// ProductView.propTypes = {
//   product: PropTypes.array,
// };

export default ProductView;
