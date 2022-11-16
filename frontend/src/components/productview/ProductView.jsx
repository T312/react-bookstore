/* eslint-disable no-const-assign */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//----------------------------------
import Button from "../button/Button";
// import { addToCart } from "../../features/cart/pathAPI";
// import { removeFromCart } from "../../features/cart/cartSlice";
import { addItem } from "../../features/cart/cartSlice";
import { closeModal } from "../../features/productmodal/productModalSlice";
//----------------------------------
import "./product-view.scss";
import numberWithCommas from "../../utils/numberWithCommas.js";

const ProductView = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

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
  const [descriptionExpand, setDescriptionExpand] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (product === undefined)
    product = {
      name: "",
      author: "",
      descriptionImages: [],
      description: "",
      price: "",
    };

  useEffect(() => {
    setPreviewImg(imageMain);
    setQuantity(1);
  }, [product]);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const addToCart = () => {
    let newItem = {
      name: product.name,
      price: product.price,
      quantity: quantity,
    };
    if (dispatch(addItem(newItem))) {
      alert("Đã thêm sản phẩm vào giỏ hàng!");
    } else {
      alert("Thêm sản phẩm thất bại");
    }
  };

  const goToCart = () => {
    let newItem = {
      name: product.name,
      price: product.price,
      quantity: quantity,
    };
    if (dispatch(addItem(newItem))) {
      dispatch(closeModal());
      props.history?.push("/cart");
    } else {
      alert("Fail");
    }
  };

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
        <div
          className={`product-description ${descriptionExpand ? "expand" : ""}`}
        >
          <div className='product-description__title'>Mô Tả Sản Phẩm</div>
          <div
            className='product-description__content'
            dangerouslySetInnerHTML={{ __html: product.description }}
          >
            {/* {product.description} */}
          </div>
          <div className='product-description__toggle'>
            <Button
              size='sm'
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "Thu gọn" : "Xem thêm"}
            </Button>
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
            {numberWithCommas(product.price)} ₫
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
            <div
              className='product__info__item__quantity__btn'
              onClick={() => updateQuantity("minus")}
            >
              <i className='bx bx-minus'></i>
            </div>
            <div className='product__info__item__quantity__input'>
              {quantity}
            </div>
            <div
              className='product__info__item__quantity__btn'
              onClick={() => updateQuantity("plus")}
            >
              <i className='bx bx-plus'></i>
            </div>
          </div>
        </div>
        <div className='product__info__item'>
          <Button onClick={() => addToCart()}>
            <i className='bx bx-cart-alt product__info__item__cart'></i>
            thêm vào giỏ hàng
          </Button>
          <Button onClick={() => goToCart()}>mua ngay</Button>
        </div>
      </div>
      <div
        className={`product-description mobile ${
          descriptionExpand ? "expand" : ""
        }`}
      >
        <div className='product-description__title'>Mô Tả Sản Phẩm</div>
        <div
          className='product-description__content'
          dangerouslySetInnerHTML={{ __html: product.description }}
        >
          {/* {product.description} */}
        </div>
        <div className='product-description__toggle'>
          <Button
            size='sm'
            onClick={() => setDescriptionExpand(!descriptionExpand)}
          >
            {descriptionExpand ? "Thu gọn" : "Xem thêm"}
          </Button>
        </div>
      </div>
    </div>
  );
};

// ProductView.propTypes = {
//   product: PropTypes.object,
// };

export default ProductView;
