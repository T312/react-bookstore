import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// -------------------------------
import Helmet from "../../components/helmet/Helmet";
import Section, {
  SectionBody,
  SectionTitle,
} from "../../components/section/Section";
import Grid from "../../components/grid/Grid";
import ProductCard from "../../components/productcard/ProductCard";
import ProductView from "../../components/productview/ProductView";
import ProductReview from "../../components/productreview/ProductReview";
import Button from "../../components/button/Button";
// import numberWithCommas from "../utils/numberWithCommas";
import { getProductAll, getProduct } from "../../features/product/pathAPI";
//--------------------------------
import users from "../../assets/images/users.png";
import "./product.scss";
import Comment from "./Comment";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  const user = useSelector((state) => state.authUser);
  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;
  const { reviews } = product;

  const checkReview = reviews ? reviews : [];

  const date = new Date(user.user.createdAt);
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getProductAll());
  }, [dispatch]);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={product.name}>
      <div className="container" style={{ marginTop: "100px" }}>
        <Section>
          <SectionBody>
            <ProductView product={product} />
          </SectionBody>
        </Section>

        <Section>
          <SectionTitle>Sản phẩm tương tự</SectionTitle>
          <SectionBody>
            <Grid col={5} mdCol={2} smCol={1} gap={20}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          {/* <SectionTitle>Đánh Giá Sản Phẩm</SectionTitle> */}
          <SectionBody>
            <div className="wrapper">
              <div className="rating-box">
                <div className="rating-header">
                  <h1 className="title">Đánh giá sản phẩm</h1>
                  <div className="info-review">
                    <div className="left">
                      <img src={users} alt="" />
                      <div className="text-container">
                        <span className="author">{user.user.name}</span>
                        <span className="txt">
                          {" "}
                          Đã tham gia vào{" "}
                          {`${date.getDate()}/${
                            date.getMonth() + 1
                          }/${date.getFullYear()}`}
                        </span>
                      </div>
                    </div>
                    {/* chưa làm */}
                    <div className="right"></div>
                  </div>
                  <div className="info-rating">
                    <div className="star-count">
                      <span className="avg">4.5 </span>
                      /5
                    </div>
                    <div className="stars">
                      <div className="avg-stars">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star-half"></i>
                      </div>
                      <div className="rating-count">
                        <span className="count"> {checkReview.length} </span>
                        Đánh giá
                      </div>
                    </div>
                  </div>
                  <div className="rating-bar">
                    <div className="bar-item">
                      <div className="star">
                        5 <i className="bx bxs-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          style={{ width: "67%" }}
                          className="progress-line"
                        ></div>
                      </div>
                      <div className="percent">67%</div>
                    </div>
                    <div className="bar-item">
                      <div className="star">
                        4 <i className="bx bxs-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          style={{ width: "13%" }}
                          className="progress-line"
                        ></div>
                      </div>
                      <div className="percent">13%</div>
                    </div>
                    <div className="bar-item">
                      <div className="star">
                        3 <i className="bx bxs-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          style={{ width: "15%" }}
                          className="progress-line"
                        ></div>
                      </div>
                      <div className="percent">15%</div>
                    </div>
                    <div className="bar-item">
                      <div className="star">
                        2 <i className="bx bxs-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          style={{ width: "3%" }}
                          className="progress-line"
                        ></div>
                      </div>
                      <div className="percent">3%</div>
                    </div>
                    <div className="bar-item">
                      <div className="star">
                        1 <i className="bx bxs-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          style={{ width: "2%" }}
                          className="progress-line"
                        ></div>
                      </div>
                      <div className="percent">2%</div>
                    </div>
                  </div>
                </div>
                <div className="review-box">
                  <div className="review-header">
                    <div className="count-review">
                      <span>{checkReview.length}</span>Đánh giá
                    </div>
                    <div className="txt btn-write">
                      <Button size="sm" onClick={() => setOpenModal(true)}>
                        <i className="bx bx-edit-alt"></i>
                        Viết đánh giá
                      </Button>
                      <ProductReview
                        open={openModal}
                        onClose={() => setOpenModal(false)}
                        id={id}
                      />
                    </div>
                  </div>
                  <div className="review-content">
                    <>
                      {checkReview.map((review) => (
                        <Comment review={review} key={review._id} />
                      ))}
                    </>
                    {/* {reviews.map((review) => {
                      <Comment review={review} />;
                    })} */}
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
