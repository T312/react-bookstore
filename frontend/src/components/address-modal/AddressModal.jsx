import React from "react";
import "./address-modal.scss";
import Button from "../button/Button";
import { useForm } from "react-hook-form";

const AddressModal = ({ open, onClose }) => {
  if (!open) {
    return null;
  }

  return <ModalFormAdress setAddress={(data, canceled) => {}} />;
};
export default AddressModal;

const ModalFormAdress = ({ setAddress }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      setAddress(data, false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div className="overlay">
        <div className="feedback-users">
          <div className="feedback-header">
            <div className="close-btn" onClick={() => setAddress(null, true)}>
              <i className="bx bx-x"></i>
            </div>
            <div className="title">Thêm địa chỉ mới</div>
            {/* <div className='txt'>
            Mời bạn chia sẻ thêm một số cảm nhận về sản phẩm!
          </div> */}
          </div>
          <div className="feedback-content">
            <div className="forms">
              <div className="forms-input">
                <label htmlFor="name">Họ và Tên</label>
                <input
                  id="name"
                  type="text"
                  placeholder=""
                  required
                  {...register("name", { required: true })}
                />
              </div>
              <div className="forms-input">
                <label htmlFor="name">Địa chỉ</label>
                <input
                  id="address"
                  type="text"
                  placeholder=""
                  required
                  {...register("address", { required: true })}
                />
              </div>
              <div className="forms-input">
                <label htmlFor="name">Số điện thoại</label>
                <input
                  id="phone-number"
                  type="text"
                  placeholder=""
                  required
                  {...register("phoneNumber", { required: true })}
                />
              </div>
            </div>
            <div className="btn-feedback">
              <Button size="sm" onClick={() => setAddress(null, true)}>
                Hủy
              </Button>
              <Button size="sm">Lưu</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
