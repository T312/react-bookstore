import React from "react";
import { Link } from "react-router-dom";
import Toast from "../LoadingError/Toast";

const AddUserMain = () => {
  return (
    <>
      <Toast />
      <section className='content-main' style={{ maxWidth: "1200px" }}>
        <form>
          <div className='content-header'>
            <h2 className='content-title'>Thêm người dùng mới</h2>
          </div>

          <div className='row mb-2'>
            <div className='col-xl-8 col-lg-8'>
              <div className='card mb-4 shadow-sm'>
                <div className='card-body'>
                  {/* {error && <Message variant="alert-danger">{error}</Message>}
                          {loading && <Loading />} */}
                  <div className='col'>
                    <div className='mb-4'>
                      <label htmlFor='product_price' className='form-label'>
                        Họ và tên
                      </label>
                      <input
                        type='text'
                        placeholder='Nhập họ và tên'
                        className='form-control'
                      />
                    </div>
                    <div className='mb-4'>
                      <label htmlFor='product_price' className='form-label'>
                        Email
                      </label>
                      <input
                        type='text'
                        placeholder='Nhập Email'
                        className='form-control'
                      />
                    </div>
                    <div className='mb-4'>
                      <label htmlFor='product_price' className='form-label'>
                        Mật khẩu
                      </label>
                      <input
                        type='text'
                        placeholder='Nhập mật khẩu'
                        className='form-control'
                      />
                    </div>
                    <div className='mb-4'>
                      <label htmlFor='product_price' className='form-label'>
                        Số điện thoại
                      </label>
                      <input
                        type='text'
                        placeholder='Nhập số điện thoại'
                        className='form-control'
                      />
                    </div>
                    <div className='mb-4'>
                      <label htmlFor='product_price' className='form-label'>
                        Phân quyền tài khoản
                      </label>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='flexRadioDefault'
                          id='flexRadioDefault1'
                        />
                        <label
                          className='form-check-label'
                          for='flexRadioDefault1'
                        >
                          Quản trị viên
                        </label>
                      </div>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='flexRadioDefault'
                          id='flexRadioDefault2'
                          checked
                        />
                        <label
                          className='form-check-label'
                          for='flexRadioDefault2'
                        >
                          Người giao hàng
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='btn-submit'>
                  <div className='btn-action'>
                    <button type='submit' className='btn btn-primary'>
                      Tạo tài khoản
                    </button>
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
