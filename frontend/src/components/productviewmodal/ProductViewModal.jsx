import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//------------------------
import ProductView from "../productview/ProductView";
import Button from "../button/Button";
import { getProductAll, getProduct } from "../../features/product/pathAPI";
import { closeModal } from "../../features/productmodal/productModalSlice";
//------------------------
import "./product-view-modal.scss";

const ProductViewModal = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  const [productDet, setProductDet] = useState(undefined);

  useEffect(() => {
    const modal = dispatch(getProduct());
    setProductDet(modal);
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getProductAll());
  // }, [dispatch]);

  return (
    <div
      className={`product-view__modal ${
        productDet === undefined ? "" : "active"
      }`}
    >
      <div className='product-view__modal__content'>
        <ProductView product={product} />
        <div className='product-view__modal__content__close'>
          <Button
            size='sm'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            đóng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
