import React from "react";
import "./address-modal.scss";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import { shippingUserCreate } from "../../features/user/pathAPI";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../features/user/pathAPI";
import { useEffect } from "react";

const AddressModal = ({ open, onClose }) => {
  const initState = {
    address: "",
    name: "",
    phoneNumber: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const onSubmit = async (data) => {
    try {
      dispatch(shippingUserCreate(data));
      setTimeout(() => {
        dispatch(getUser());
      }, 1000);

      onClose();
      reset(initState);
    } catch (error) {
      console.log(error);
    }
  };
  if (!open) {
    return null;
  }

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div className="overlay">
        <div className="feedback-users">
          <div className="feedback-header">
            <div className="close-btn" onClick={onClose}>
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
              <Button size="sm" onClick={onClose}>
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
export default AddressModal;
