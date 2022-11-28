import React, { useEffect, useState } from "react";
import "./product-reivew.scss";
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
import { getProduct, reviewProduct } from "../../features/product/pathAPI";

const ProductReview = ({ open, onClose, id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      // const form = new FormData();
      // form.append("rating", data.rating);
      // form.append("comment", data.comment);
      // form.append("id", id);
      // toast("Bạn đã bình luận thành công!");
      // dispatch(reviewProduct(form));

      const token = localStorage.getItem("accessToken");

      const { dataRes } = await Axios.post(
        `http://localhost:8000/v1/product/${id}/review`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast("Bạn đã bình luận thành công!");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch]);
  if (!open) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="overlay">
        <div className="feedback-user">
          <div className="feedback-header">
            <div className="close-btn" onClick={onClose}>
              <i className="bx bx-x"></i>
            </div>
            <div className="title">Viết đánh giá sản phẩm</div>
            <div className="txt">
              Mời bạn chia sẻ thêm một số cảm nhận về sản phẩm!
            </div>
          </div>
          <div className="feedback-content">
            <div className="rating">
              <div className="title">Chọn đánh giá của bạn</div>
              <div className="stars">
                <i className="bx bxs-star" data-rating="1"></i>
                <i className="bx bxs-star" data-rating="2"></i>
                <i className="bx bxs-star" data-rating="3"></i>
                <i className="bx bxs-star" data-rating="4"></i>
                <i className="bx bxs-star" data-rating="5"></i>
              </div>
            </div>
            <div className="forms">
              <div className="forms-input">
                <label htmlFor="name">Tên của bạn</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Nhập tên của bạn"
                  {...register("rating", { required: true })}
                />
              </div>
              <div className="form-input">
                <label htmlFor="feedback">Viết đánh giá</label>
                <textarea
                  name=""
                  id="feedback"
                  cols="30"
                  rows="5"
                  placeholder="Nhập đánh giá của bạn về sản phẩm ..."
                  // value={comment}
                  // onChange={(e) => setComment(e.target.value)}
                  {...register("comment", { required: true })}
                ></textarea>
              </div>
            </div>
            <div className="btn-feedback">
              <Button size="sm" onClick={onClose}>
                Hủy
              </Button>
              <Button size="sm">Gửi đánh giá</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductReview;
