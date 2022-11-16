import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//------------------------
import ProductView from "../productview/ProductView";
import Button from "../button/Button";
import { getProduct } from "../../features/product/pathAPI";
import { closeModal } from "../../features/productmodal/productModalSlice";
//------------------------
import "./product-view-modal.scss";

const ProductViewModal = () => {
  const dispatch = useDispatch();

  const productModal = useSelector((state) => state.productModal.value);

  const [productDet, setProductDet] = useState(undefined);

  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  useEffect(() => {
    setProductDet(dispatch(getProduct(productModal)));
  }, [dispatch, productModal]);

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
