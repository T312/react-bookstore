import React from "react";
// import CheckBox from "../../components/checkbox/CheckBox";
import "./payment.scss";

const Payment = ({ setCheckCash }) => {
  return (
    <div className="payment">
      <h2 className="payment-title">Chọn phương thức thanh toán</h2>
      <label className="containers">
        Bằng Paypal
        <input
          type="radio"
          defaultChecked="checked"
          name="radio"
          value="Paypal"
          onChange={(e) => setCheckCash(e.target.value)}
        />
        <span className="checkmark"></span>
      </label>
      <label className="containers">
        Bằng Tiền mặt
        <input
          type="radio"
          name="radio"
          value="Bằng Tiền mặt"
          onChange={(e) => setCheckCash(e.target.value)}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Payment;
