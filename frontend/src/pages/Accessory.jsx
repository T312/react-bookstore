import React from "react";
import Helmet from "../components/helmet/Helmet";
import Section, {
  SectionBody,
  SectionTitle,
} from "../components/section/Section";
// import ProductReview from "../components/productreview/ProductReview";

const Accessory = () => {
  return (
    <Helmet title='Accessories'>
      <div className='container'>
        <Section>
          <SectionTitle>---------</SectionTitle>
          <SectionTitle>khám phá thêm</SectionTitle>
          <SectionBody></SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

export default Accessory;
