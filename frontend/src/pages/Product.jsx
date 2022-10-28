import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// -------------------------------
import Helmet from "../components/helmet/Helmet";
import Section, {
  SectionBody,
  SectionTitle,
} from "../components/section/Section";
import Grid from "../components/grid/Grid";
import ProductCard from "../components/productcard/ProductCard";
import ProductView from "../components/productview/ProductView";
//--------------------------------
import productData from "../data/products";

const Product = (props) => {
  // const { id } = useParams();
  // const id = props.match.params._id;

  // const product = productData.getProductById(id);
  const relatedProducts = productData.getProducts(8);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [product]);

  return (
    <Helmet title=''>
      <div className='container'>
        <Section>
          <SectionBody>
            <ProductView />
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Sản phẩm tương tự</SectionTitle>
          <SectionBody>
            <Grid col={5} mdCol={2} smCol={1} gap={20}>
              {relatedProducts.map((item, index) => (
                <ProductCard
                  key={index}
                  image={item.image}
                  name={item.name}
                  author={item.author}
                  rating={item.rating}
                  price={Number(item.price)}
                  _id={item._id}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

export default Product;
