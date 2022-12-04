import React, { useEffect, useState } from "react";
import OrderDetailProducts from "./OrderDetailProducts";
import OrderDetailInfo from "./OrderDetailInfo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deliverOrder,
  getOrderDetails,
} from "../../Redux/Actions/OrderActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import moment from "moment";
import axios from "axios";
const OrderDetailShipMain = (props) => {
  const { orderId } = props;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDelivered, success: successDelivered } = orderDeliver;
  const [status, setStatus] = useState({});

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId, successDelivered]);

  const PaidHandler = () => {
    // dispatch(deliverOrder(order));
    console.log("helooo");
  };
  const handleSave = async () => {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `http://localhost:8000/v1/order/${order._id}/ship`,
      status,
      config,
    );
    setTimeout(() => {
      dispatch(getOrderDetails(orderId));
    }, 1000);
  };

  return (
    <section className='content-main'>
      <div className='content-header'>
        <Link to='/orders' className='btn btn-dark text-white'>
          Quay lại
        </Link>
      </div>

      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant='alert-danger'>{error}</Message>
      ) : (
        <div className='card'>
          <header className='card-header p-3 Header-green'>
            <div className='row align-items-center '>
              <div className='col-lg-6 col-md-6'>
                <span>
                  <i className='far fa-calendar-alt mx-2'></i>
                  <b className='text-white'>
                    {moment(order.createdAt).format("llll")}
                  </b>
                </span>
                <br />
                <small className='text-white mx-3 '>
                  ID đơn hàng: {order._id}
                </small>
              </div>
              {order.status === "Đã giao" || order.status === "Đã hủy" ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className='col-lg-6 col-md-6 ms-auto d-flex justify-content-end align-items-center'>
                    <select
                      className='form-select d-inline-block'
                      style={{ maxWidth: "200px" }}
                      // value={status}
                      onChange={(e) => setStatus({ status: e.target.value })}
                    >
                      <option>Thay đổi trạng thái</option>

                      <option value={"Đang giao"}>Đang giao</option>
                      <option value={"Đã giao"}>Đã giao</option>
                    </select>
                    <Link className='btn btn-success ms-2' to='#'>
                      <i className='fas fa-print' onClick={handleSave}></i>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </header>
          <div className='card-body'>
            {/* Order info */}
            <OrderDetailInfo order={order} />

            <div className='row'>
              <div className='col-xl-12'>
                <div className='table-responsive'>
                  <OrderDetailProducts order={order} loading={loading} />
                </div>
              </div>
              {/* Payment Info */}
              {order.status === "Đã giao" || order.status === "Đã hủy" ? (
                <></>
              ) : (
                <>
                  {/* <div className="col-lg-3">
                    <div className="box shadow-sm bg-light">
                      {order.isPaid ? (
                        <button className="btn btn-success col-12">
                          PAID AT ({" "}
                          {moment(order.isDeliveredAt).format("MMM Do YY")})
                        </button>
                      ) : (
                        <>
                          {loadingDelivered && <Loading />}

                          <button
                            onClick={PaidHandler}
                            className="btn btn-dark col-12"
                          >
                            MARK AS PAID
                          </button>
                        </>
                      )}
                    </div>
                  </div> */}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderDetailShipMain;
