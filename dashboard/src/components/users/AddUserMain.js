import React, { useState } from "react";
import { Link } from "react-router-dom";
import Toast from "../LoadingError/Toast";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
const AddUserMain = () => {
  const initState = {
    name: "",
    email: "",
    password: "",
    phone: "",
    admin: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("accessToken");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.post(
        `http://localhost:8000/v1/user`,
        data,
        config
      );
      // console.log(res);
      toast("Bạn đã thêm nhân viên thành công!!!");
      reset(initState);
    } catch (error) {
      toast("Opp có lỗi!!! Kiểm tra lại email bạn nhé");
    }
  };
  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="content-header">
            <h2 className="content-title">Thêm người dùng mới</h2>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="">
                <div className=" shadow-sm">
                  <div className="card-body">
                    {/* {error && <Message variant="alert-danger">{error}</Message>}
                          {loading && <Loading />} */}
                    <div className="col">
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Họ và tên
                        </label>
                        <input
                          type="text"
                          placeholder="Nhập họ và tên"
                          className="form-control"
                          required
                          {...register("name", { required: true })}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          placeholder="Nhập Email"
                          className="form-control"
                          required
                          {...register("email", { required: true })}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Mật khẩu
                        </label>
                        <input
                          type="text"
                          placeholder="Nhập mật khẩu"
                          className="form-control"
                          required
                          {...register("password", { required: true })}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Số điện thoại
                        </label>
                        <input
                          type="text"
                          placeholder="Nhập số điện thoại"
                          className="form-control"
                          required
                          {...register("phone", { required: true })}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Phân quyền tài khoản
                        </label>
                        <select
                          className="form-select"
                          {...register("admin", { required: true })}
                        >
                          <option value={"Admin"}>Quản trị viên</option>
                          <option value={"Shipper"}>Nhân viên giao hàng</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="btn-submit">
                    <div className="btn-action">
                      <button type="submit" className="btn btn-primary">
                        Tạo tài khoản
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddUserMain;
