import React from "react";
import "./address-modal.scss";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import { shippingUserCreate } from "../../features/user/pathAPI";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../features/user/pathAPI";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
const AddressModal = ({ open, onClose }) => {
  const iinitState = {
    provinces: [],
    districts: [],
    wards: [],
    selectProvince: "",
    selectDistrict: "",
    selectWard: "",
  };

  const INIT_PROVINCE = "init_province";
  const SELECT_PROVINCE = "select_province";
  const INIT_DISTRICTS = "init_districts";
  const SELECT_DISTRICT = "select_district";
  const INIT_WARD = "init_ward";
  const SELECT_WARD = "select_ward";

  const paymentReducer = (state, action) => {
    switch (action.type) {
      case INIT_PROVINCE:
        return {
          ...state,
          provinces: action.payload,
        };
      case SELECT_PROVINCE:
        return {
          ...state,
          selectProvince: action.payload,
        };
      case INIT_DISTRICTS:
        return {
          ...state,
          districts: action.payload,
        };
      case SELECT_DISTRICT:
        return {
          ...state,
          selectDistrict: action.payload,
        };
      case INIT_WARD:
        return {
          ...state,
          wards: action.payload,
        };
      case SELECT_WARD:
        return {
          ...state,
          selectWard: action.payload,
        };
      default:
        throw new Error("invalid payment action");
    }
  };

  const [statePayment, dispatchPayment] = useReducer(
    paymentReducer,
    iinitState
  );

  const { provinces, districts, wards } = statePayment;

  const fetchProvince = async () => {
    const respone = await axios
      .get("https://provinces.open-api.vn/api/p/")
      .then((respone) => {
        dispatchPayment({
          type: INIT_PROVINCE,
          payload: respone.data,
        });
      });
  };

  const fetchDistrict = async () => {
    const respone = await axios
      .get(
        `https://provinces.open-api.vn/api/p/${statePayment.selectProvince.code}?depth=2`
      )
      .then((respone) => {
        dispatchPayment({
          type: INIT_DISTRICTS,
          payload: respone.data,
        });
      });
  };

  const fetchWard = async () => {
    const respone = await axios
      .get(
        `https://provinces.open-api.vn/api/d/${statePayment.selectDistrict.code}?depth=2`
      )
      .then((respone) => {
        console.log(respone.data);
        dispatchPayment({
          type: INIT_WARD,
          payload: respone.data,
        });
      });
  };

  const handleProvince = () => {
    //fetchAPI only once times
    if (provinces == "") {
      fetchProvince();
    }
    setShowProvince(true);
  };

  const handleSelectProvince = (e, province) => {
    dispatchPayment({
      type: SELECT_PROVINCE,
      payload: { code: province.code, name: province.name },
    });
    setShowProvince(false);
  };

  const handleDistrict = () => {
    if (statePayment.selectProvince && districts != "") {
      fetchDistrict();
    }
    setShowDistric(true);
  };

  useEffect(() => {
    if (statePayment.selectProvince) {
      dispatchPayment({
        type: SELECT_DISTRICT,
        payload: "",
      });
      dispatchPayment({
        type: SELECT_WARD,
        payload: "",
      });
      fetchDistrict();
    }
  }, [statePayment.selectProvince]);

  const handleSelectDistrict = (e, district) => {
    dispatchPayment({
      type: SELECT_DISTRICT,
      payload: { code: district.code, name: district.name },
    });
    setShowDistric(false);
  };

  const handleWard = () => {
    if (statePayment.selectDistrict && wards != "") {
      fetchWard();
    }
    setShowWard(true);
  };

  useEffect(() => {
    if (statePayment.selectDistrict) {
      dispatchPayment({
        type: SELECT_WARD,
        payload: "",
      });
      fetchWard();
    }
  }, [statePayment.selectDistrict]);

  const handleSelectWard = (e, ward) => {
    dispatchPayment({
      type: SELECT_WARD,
      payload: { code: ward.code, name: ward.name },
    });
    setShowWard(false);
  };

  const [showProvince, setShowProvince] = useState(false);
  const [showDistrict, setShowDistric] = useState(false);
  const [showWard, setShowWard] = useState(false);

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
      data.address = `${data.address}, ${statePayment.selectWard.name}, ${statePayment.selectDistrict.name}, ${statePayment.selectProvince.name}`;
      dispatch(shippingUserCreate(data));
      setTimeout(() => {
        dispatch(getUser());
      }, 1000);

      onClose();
      reset(initState);
      setShowWard(false);
      setShowDistric(false);
      setShowProvince(false);
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

              <div className="forms-input forms-input-province">
                <div>
                  <label htmlFor="name">Tỉnh</label>
                  <input
                    onFocus={() => handleProvince()}
                    value={statePayment.selectProvince.name ?? ""}
                    required
                    // {...register("address", { required: true })}
                  />
                  <ul className="listAddress">
                    {showProvince
                      ? provinces.map((province) => (
                          <li
                            key={province.code}
                            onClick={(e) => {
                              handleSelectProvince(e, province);
                            }}
                          >
                            {province.name}
                          </li>
                        ))
                      : ""}
                  </ul>
                </div>
                <div>
                  <label htmlFor="name">Huyện/ Thị xã</label>
                  <input
                    id="address"
                    readOnly
                    onClick={() => handleDistrict()}
                    value={statePayment.selectDistrict.name ?? ""}
                    required
                    // {...register("address", { required: true })}
                  />
                  <ul className="listAddress">
                    {showDistrict == true && districts != ""
                      ? districts.districts.map((district) => (
                          <li
                            key={district.code}
                            onClick={(e) => handleSelectDistrict(e, district)}
                          >
                            {district.name}
                          </li>
                        ))
                      : ""}
                  </ul>
                </div>
                <div>
                  <label htmlFor="name">Xã</label>
                  <input
                    id="address"
                    readOnly
                    onClick={() => handleWard()}
                    value={statePayment.selectWard.name ?? ""}
                    required
                    // {...register("address", { required: true })}
                  />
                  <ul className="listAddress">
                    {showWard == true && wards != ""
                      ? wards.wards.map((ward) => (
                          <li
                            key={ward.code}
                            onClick={(e) => handleSelectWard(e, ward)}
                          >
                            {ward.name}
                          </li>
                        ))
                      : ""}
                  </ul>
                </div>
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
