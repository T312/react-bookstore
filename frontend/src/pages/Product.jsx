import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// -------------------------------
import Helmet from "../components/helmet/Helmet";
import Section, {
  SectionBody,
  SectionTitle,
} from "../components/section/Section";
import Grid from "../components/grid/Grid";
import ProductCard from "../components/productcard/ProductCard";
import ProductView from "../components/productview/ProductView";
import ProductReview from "../components/productreview/ProductReview";
import Button from "../components/button/Button";
// import numberWithCommas from "../utils/numberWithCommas";
//--------------------------------
import productData from "../data/products";
import users from "../assets/images/users.png";
import "../scss/components/product.scss";

const Product = () => {
  const product = (id) => productData.find((e) => e.id === id);
  // const { id } = useParams();
  // const { product } = productData.getProductById(props.match.params.id);
  const relatedProducts = productData.getProducts(8);

  // focus to scroll to top
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [product]);

  const [openModal, setOpenModal] = useState(false);

  return (
    <Helmet title={product.name}>
      <div className='container'>
        <Section>
          <SectionBody>
            <ProductView product={product} />
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Sản phẩm tương tự</SectionTitle>
          <SectionBody>
            <Grid col={5} mdCol={2} smCol={1} gap={20}>
              {relatedProducts.map((item, index) => (
                <ProductCard
                  key={index}
                  image={item.image.link}
                  name={item.name}
                  author={item.author}
                  rating={item.rating}
                  price={Number(item.price)}
                  id={item.id}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          {/* <SectionTitle>Đánh Giá Sản Phẩm</SectionTitle> */}
          <SectionBody>
            <div className='wrapper'>
              <div className='rating-box'>
                <div className='rating-header'>
                  <h1 className='title'>Đánh giá sản phẩm</h1>
                  <div className='info-review'>
                    <div className='left'>
                      <img src={users} alt='' />
                      <div className='text-container'>
                        <span className='author'>Lâm Trung Hiếu</span>
                        <span className='txt'>Đã tham gia 2 năm</span>
                      </div>
                    </div>
                    {/* chưa làm */}
                    <div className='right'></div>
                  </div>
                  <div className='info-rating'>
                    <div className='star-count'>
                      <span className='avg'>4.5 </span>
                      /5
                    </div>
                    <div className='stars'>
                      <div className='avg-stars'>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star-half'></i>
                      </div>
                      <div className='rating-count'>
                        <span className='count'> 224 </span>
                        Đánh giá
                      </div>
                    </div>
                  </div>
                  <div className='rating-bar'>
                    <div className='bar-item'>
                      <div className='star'>
                        5 <i className='bx bxs-star'></i>
                      </div>
                      <div className='progress'>
                        <div
                          style={{ width: "67%" }}
                          className='progress-line'
                        ></div>
                      </div>
                      <div className='percent'>67%</div>
                    </div>
                    <div className='bar-item'>
                      <div className='star'>
                        4 <i className='bx bxs-star'></i>
                      </div>
                      <div className='progress'>
                        <div
                          style={{ width: "13%" }}
                          className='progress-line'
                        ></div>
                      </div>
                      <div className='percent'>13%</div>
                    </div>
                    <div className='bar-item'>
                      <div className='star'>
                        3 <i className='bx bxs-star'></i>
                      </div>
                      <div className='progress'>
                        <div
                          style={{ width: "15%" }}
                          className='progress-line'
                        ></div>
                      </div>
                      <div className='percent'>15%</div>
                    </div>
                    <div className='bar-item'>
                      <div className='star'>
                        2 <i className='bx bxs-star'></i>
                      </div>
                      <div className='progress'>
                        <div
                          style={{ width: "3%" }}
                          className='progress-line'
                        ></div>
                      </div>
                      <div className='percent'>3%</div>
                    </div>
                    <div className='bar-item'>
                      <div className='star'>
                        1 <i className='bx bxs-star'></i>
                      </div>
                      <div className='progress'>
                        <div
                          style={{ width: "2%" }}
                          className='progress-line'
                        ></div>
                      </div>
                      <div className='percent'>2%</div>
                    </div>
                  </div>
                </div>
                <div className='review-box'>
                  <div className='review-header'>
                    <div className='count-review'>
                      <span>13</span>Đánh giá
                    </div>
                    <div className='txt btn-write'>
                      <Button size='sm' onClick={() => setOpenModal(true)}>
                        <i className='bx bx-edit-alt'></i>
                        Viết đánh giá
                      </Button>
                      <ProductReview
                        open={openModal}
                        onClose={() => setOpenModal(false)}
                      />
                    </div>
                  </div>
                  <div className='review-content'>
                    <div className='user-review'>
                      <div className='user-rating'>
                        <div className='username'>
                          <strong>Lâm Trung Hiếu</strong>
                        </div>
                        <div className='stars'>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bx-star'></i>
                        </div>
                      </div>
                      <div className='comment-content'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid magnam repellendus culpa blanditiis.
                      </div>
                      <time>Oct 30, 2022</time>
                    </div>
                    <div className='user-review'>
                      <div className='user-rating'>
                        <div className='username'>
                          <strong>Nguyễn Longg</strong>
                        </div>
                        <div className='stars'>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bx-star'></i>
                        </div>
                      </div>
                      <div className='comment-content'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid magnam repellendus culpa blanditiis.
                      </div>
                      <time>Oct 30, 2022</time>
                    </div>
                    <div className='user-review'>
                      <div className='user-rating'>
                        <div className='username'>
                          <strong>Kha Lười</strong>
                        </div>
                        <div className='stars'>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bx-star'></i>
                        </div>
                      </div>
                      <div className='comment-content'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid magnam repellendus culpa blanditiis.
                      </div>
                      <time>Oct 30, 2022</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

export default Product;
