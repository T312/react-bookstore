import React from "react";

import "./checkout-status.scss";

const CheckoutStatus1 = ({ step1, step2, step3 }) => {
  return (
    <div className='container'>
      {/* <i class='bx bx-check'></i> */}
      {/* Giỏ hàng */}
      <div className='status-bar'>
        <div className='status-checkpoint'>
          <div className=''>
            <i className='bx bx-check icon-check'></i>
          </div>
          <div className='step'>Giỏ hàng</div>
        </div>
        <div
          className='connection'
          style={{ backgroundColor: "#00AB55" }}
        ></div>
        <div className='status-checkpoint'>
          <div className=''>
            <i className='bx bx-check icon-check'></i>
          </div>
          <div className='' style={{ backgroundColor: "#00AB55" }}></div>
          <div className='step'>Hóa đơn & Địa chỉ</div>
        </div>
        <div
          className='connection'
          style={{ backgroundColor: "#00AB55" }}
        ></div>

        <div className='status-checkpoint'>
          <div className=''>
            <i className='bx bx-check icon-check'></i>
          </div>
          {/* <div className='circle'></div> */}
          <div className='step'>Thanh toán</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStatus1;
