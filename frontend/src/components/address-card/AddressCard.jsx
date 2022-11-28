import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddressModal from "../address-modal/AddressModal";
import Button from "../button/Button";
import "./address-card.scss";

const AddressCard = ({ address }) => {
  const [openModal, setOpenModal] = useState(false);
  const checkAdress = address ? address : [];
  const userInfo = useSelector((state) => state.authUser);
  const { user } = userInfo;

  return (
    <div className="address-card">
      {checkAdress.map((adr, index) => {
        return (
          <>
            <div className="address-card__infor">
              <div className="address-card__infor__text">
                <h6 className="address-card__infor__text__name">
                  <strong>{adr.name}</strong>
                </h6>
                <span className="address-card__infor__text__note">
                  (Địa chỉ nhà)
                </span>
                {/* <span className="address-card__infor__text__default">
                  Mặc định
                </span> */}
              </div>
              <div className="address-card__infor__address">
                <p className="address-card__infor__address-info">
                  {adr.address}
                </p>
                <p className="address-card__infor__address-info">
                  {adr.phoneNumber}
                </p>
              </div>
              <div className="address-card__infor__btn-deliver">
                <Button size="sm">Thiết lập mặc định</Button>
              </div>
            </div>
          </>
        );
      })}
      <div className="address-card__infor__btn-new">
        <Button size="sm" onClick={() => setOpenModal(true)}>
          + Thêm địa chỉ mới
        </Button>
        <AddressModal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </div>
  );
};

export default AddressCard;
