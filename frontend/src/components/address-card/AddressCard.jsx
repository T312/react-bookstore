import React, { useState } from "react";
import AddressModal from "../address-modal/AddressModal";
import Button from "../button/Button";
import "./address-card.scss";

const AddressCard = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='address-card'>
      <div className='address-card__infor'>
        <div className='address-card__infor__text'>
          <h6 className='address-card__infor__text__name'>
            <strong>Nguyễn Thái Gia Long</strong>
          </h6>
          <span className='address-card__infor__text__note'>(Địa chỉ nhà)</span>
          <span className='address-card__infor__text__default'>Mặc định</span>
        </div>
        <div className='address-card__infor__address'>
          <p className='address-card__infor__address-info'>
            Lê Đức Thọ, quận Gò Vấp, TP. Hồ Chí Minh
          </p>
          <p className='address-card__infor__address-info'>012345678</p>
        </div>
        <div className='address-card__infor__btn-deliver'>
          <Button size='sm'>Thiết lập mặc định</Button>
        </div>
      </div>
      <div className='address-card__infor'>
        <div className='address-card__infor__text'>
          <h6 className='address-card__infor__text__name'>
            <strong>Lâm Trung Hiếu</strong>
          </h6>
          <span className='address-card__infor__text__note'>
            (Địa văn phòng)
          </span>
          {/* <span className='address-card__infor__text__default'>Mặc định</span> */}
        </div>
        <div className='address-card__infor__address'>
          <p className='address-card__infor__address-info'>
            Lê Đức Thọ, quận Gò Vấp, TP. Hồ Chí Minh
          </p>
          <p className='address-card__infor__address-info'>012345678</p>
        </div>
        <div className='address-card__infor__btn-deliver'>
          <Button size='sm'>Thiết lập mặc định</Button>
        </div>
      </div>
      <div className='address-card__infor'>
        <div className='address-card__infor__text'>
          <h6 className='address-card__infor__text__name'>
            <strong>Dương Nhật Kha</strong>
          </h6>
          <span className='address-card__infor__text__note'>
            (Địa văn phòng)
          </span>
          {/* <span className='address-card__infor__text__default'>Mặc định</span> */}
        </div>
        <div className='address-card__infor__address'>
          <p className='address-card__infor__address-info'>
            Lê Đức Thọ, quận Gò Vấp, TP. Hồ Chí Minh
          </p>
          <p className='address-card__infor__address-info'>012345678</p>
        </div>
        <div className='address-card__infor__btn-deliver'>
          <Button size='sm'>Thiết lập mặc định</Button>
        </div>
      </div>
      <div className='address-card__infor__btn-new'>
        <Button size='sm' onClick={() => setOpenModal(true)}>
          + Thêm địa chỉ mới
        </Button>
        <AddressModal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </div>
  );
};

export default AddressCard;
