import React from "react";
import "./product-reivew.scss";
import Button from "../button/Button";

const ProductReview = ({ open, onClose }) => {
  if (!open) {
    return null;
  }
  return (
    <form>
      <div className='overlay'>
        <div className='feedback-user'>
          <div className='feedback-header'>
            <div className='close-btn' onClick={onClose}>
              <i className='bx bx-x'></i>
            </div>
            <div className='title'>Viết đánh giá sản phẩm</div>
            <div className='txt'>
              Mời bạn chia sẻ thêm một số cảm nhận về sản phẩm!
            </div>
          </div>
          <div className='feedback-content'>
            <div className='rating'>
              <div className='title'>Chọn đánh giá của bạn</div>
              <div className='stars'>
                <i className='bx bxs-star' data-rating='1'></i>
                <i className='bx bxs-star' data-rating='2'></i>
                <i className='bx bxs-star' data-rating='3'></i>
                <i className='bx bxs-star' data-rating='4'></i>
                <i className='bx bxs-star' data-rating='5'></i>
              </div>
            </div>
            <div className='forms'>
              <div className='forms-input'>
                <label htmlFor='name'>Tên của bạn</label>
                <input id='name' type='text' placeholder='Nhập tên của bạn' />
              </div>
              <div className='form-input'>
                <label htmlFor='feedback'>Viết đánh giá</label>
                <textarea
                  name=''
                  id='feedback'
                  cols='30'
                  rows='5'
                  placeholder='Nhập đánh giá của bạn về sản phẩm ...'
                ></textarea>
              </div>
            </div>
            <div className='btn-feedback'>
              <Button size='sm' onClick={onClose}>
                Hủy
              </Button>
              <Button size='sm'>Gửi đánh giá</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductReview;
