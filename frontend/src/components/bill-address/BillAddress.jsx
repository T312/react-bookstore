import React from "react";
import "./bill-address.scss";

const BillAddress = ({ address }) => {
  const shippingAddress = address ? address : [];
  return (
    <div className="bill-address">
      <div className="bill-address__infor">
        <div className="bill-address__infor__text">
          <h6 className="bill-address__infor__text__name">
            <strong>{shippingAddress[0].name}</strong>
          </h6>
          <span className="bill-address__infor__text__note">(Địa chỉ nhà)</span>
          <span className="bill-address__infor__text__default">Mặc định</span>
          <div className="bill-address__infor__text__btn-edit">
            <i className="bx bxs-edit-alt "></i>
          </div>
        </div>
        <div className="bill-address__infor__address">
          <p className="bill-address__infor__address-info">
            {shippingAddress[0].address}
          </p>
          <p className="bill-address__infor__address-info">
            {shippingAddress[0].phoneNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillAddress;
