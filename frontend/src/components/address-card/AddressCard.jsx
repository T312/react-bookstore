import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddressModal from "../address-modal/AddressModal";
import Button from "../button/Button";
import "./address-card.scss";
import { getUser } from "../../features/user/pathAPI";

const AddressCard = ({ address, setaddressDefaut }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const { user } = useSelector((state) => state.getUserProfile);
  const { shippingAddress } = user;

  const [openModal, setOpenModal] = useState(false);
  const checkAdress = shippingAddress ? shippingAddress : [];
  const handleShippingAdr = (adr) => {
    setaddressDefaut(adr);
  };
  return checkAdress.length === 0 ? (
    <>
      <div className="address-card">
        <div className="address-card__infor__btn-new">
          <Button size="sm" onClick={() => setOpenModal(true)}>
            + Thêm địa chỉ mới
          </Button>
          <AddressModal open={openModal} onClose={() => setOpenModal(false)} />
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="address-card">
        {checkAdress.map((adr, index) => {
          return (
            <>
              <div className="address-card__infor" key={index}>
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
                  <Button size="sm" onClick={() => handleShippingAdr(adr)}>
                    Thiết lập mặc định
                  </Button>
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
    </>
  );
};

export default AddressCard;
