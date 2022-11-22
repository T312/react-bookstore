import React from "react";
import CheckBox from "../../components/checkbox/CheckBox";
import "./payment.scss";

const Payment = () => {
  return (
    <div className='payment'>
      <h2 className='payment-title'>Chọn phương thức thanh toán</h2>
      <label className='containers'>
        Bằng Paypal
        <input type='radio' checked='checked' name='radio' />
        <span className='checkmark'></span>
      </label>
      <label className='containers'>
        Bằng Tiền mặt
        <input type='radio' name='radio' />
        <span className='checkmark'></span>
      </label>
    </div>
  );
};

export default Payment;
