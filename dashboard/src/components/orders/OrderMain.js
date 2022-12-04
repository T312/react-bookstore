import React from "react";
import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Orders from "./Orders";
import { useSelector } from "react-redux";

const OrderMain = () => {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Đơn hàng</h2>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Trạng thái</option>
                <option>Chờ xác nhận</option>
                <option>Chờ lấy hàng</option>
                <option>Đang giao</option>
                <option>Đã giao</option>
                <option>Đã hủy</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          {/* <div className="table-responsive">
            {loading ? (
              <Loading />
            ) : error ? (
              <Message variant="alert-danger">{error}</Message>
            ) : (
              <Orders orders={orders} />
            )}
          </div> */}

          {/* Table Product */}

          <div className="col-lg-12 col-lg-8 table-responsive">
            <table className="table" style={{ borderCollapse: "separate" }}>
              <thead>
                <tr>
                  {/* <th>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </th> */}

                  <th>Khách hàng</th>
                  <th>Email</th>
                  <th>Giá</th>
                  <th>Thanh toán</th>
                  <th>Trạng thái</th>
                  <th>Ngày tạo</th>
                  <th>Chỉnh sửa</th>
                  {/* <th className="text-end">Action</th> */}
                </tr>
              </thead>
              {/* Table Data */}
              {orders.map((order) => (
                <Orders order={order} key={order.id} />
              ))}
            </table>
          </div>

          {/* End Table Product */}
        </div>
      </div>
    </section>
  );
};

export default OrderMain;
