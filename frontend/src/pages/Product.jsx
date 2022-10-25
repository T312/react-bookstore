import React from "react";
import { useParams } from "react-router-dom";
// -------------------------------
import Helmet from "../components/helmet/Helmet";

//--------------------------------
import productData from "../data/products";

const Product = (props) => {
  const { id } = useParams();

  const product = productData.getProductBySlug(props.match.params.slug);

  console.log(product);

  return (
    <Helmet title=''>
      {/* /catalog/sach-ky-nang-01 */}
      <div className='container'>
        <div className=''>Product</div>
        <div className=''>Product</div>
        <div className=''>Product</div>
        <div className=''>Product</div>
        <div className=''>Product</div>
        <div className=''>Product</div>
        <div className=''>Product</div>
        <div className=''>Product</div>
        <div className=''>Product</div>
        <div className=''>Product</div>
      </div>
    </Helmet>
  );
};

export default Product;
