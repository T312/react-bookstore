import React from "react";
import "./address-modal.scss";
import Button from "../button/Button";

const AddressModal = ({ open, onClose }) => {
  if (!open) {
    return null;
  }
  return (
    <form>
      <div className='overlay'>
        <div className='feedback-users'>
          <div className='feedback-header'>
            <div className='close-btn' onClick={onClose}>
              <i className='bx bx-x'></i>
            </div>
            <div className='title'>Thêm địa chỉ mới</div>
            {/* <div className='txt'>
              Mời bạn chia sẻ thêm một số cảm nhận về sản phẩm!
            </div> */}
          </div>
          <div className='feedback-content'>
            <div className='forms'>
              <div className='forms-input'>
                <label htmlFor='name'>Họ và Tên</label>
                <input id='name' type='text' placeholder='' />
              </div>
              <div className='forms-input'>
                <label htmlFor='name'>Địa chỉ</label>
                <input id='address' type='text' placeholder='' />
              </div>
              <div className='forms-input'>
                <label htmlFor='name'>Số điện thoại</label>
                <input id='phone-number' type='text' placeholder='' />
              </div>
            </div>
            <div className='btn-feedback'>
              <Button size='sm' onClick={onClose}>
                Hủy
              </Button>
              <Button size='sm'>Lưu</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddressModal;
