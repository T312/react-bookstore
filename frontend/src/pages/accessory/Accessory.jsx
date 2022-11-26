import React from "react";
import Helmet from "../../components/helmet/Helmet";
import Section, {
  SectionBody,
  SectionTitle,
} from "../../components/section/Section";
import ProductCard from "../../components/productcard/ProductCard";
import Grid from "../../components/grid/Grid";
// import ProductReview from "../components/productreview/ProductReview";
// import accessoryData from "../../data/accessory";

const Accessory = () => {
  return (
    <Helmet title='Accessories'>
      <div className='container'>
        <Section>
          <SectionTitle>---------</SectionTitle>
          <SectionTitle>khám phá thêm</SectionTitle>
          <SectionBody>
            {/* <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {accessory.map((item) => (
                <ProductCard
                  key={item.id}
                  img01={item.link}
                  // img02={item.image02}
                  name={item.name}
                />
              ))}
            </Grid> */}
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

const accessory = [
  {
    id: 1,
    name: " Viết bi xanh",
    link: "https://vppthaiphat.com/wp-content/uploads/2021/12/081.jpg",
  },
  {
    id: 2,
    name: " Viết bi xanh",
    link: "https://vppthaiphat.com/wp-content/uploads/2021/12/081.jpg",
  },
  {
    id: 3,
    name: " Viết bi xanh",
    link: "https://vppthaiphat.com/wp-content/uploads/2021/12/081.jpg",
  },
  {
    id: 4,
    name: " Viết bi xanh",
    link: "https://vppthaiphat.com/wp-content/uploads/2021/12/081.jpg",
  },
];

export default Accessory;
