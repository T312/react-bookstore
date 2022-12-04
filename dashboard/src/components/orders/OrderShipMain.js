import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrdersShipper } from "../../Redux/Actions/OrderActions";
import OrdersShip from "./OrdersShip";
const OrderShipMain = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrdersShipper());
  }, []);
  const orderList = useSelector((state) => state.orderShipList);
  const { loading, error, orders } = orderList;
  console.log(orders);
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
                <option>Chờ lấy hàng</option>
                <option>Đang giao</option>
                <option>Đã giao</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Hiện 20</option>
                <option>Hiện 30</option>
                <option>Hiện 40</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="col-lg-12 col-lg-8 table-responsive">
            <table className="table" style={{ borderCollapse: "separate" }}>
              <thead>
                <tr>
                  <th>Tên Khách hàng</th>
                  <th>Email</th>
                  <th>Giá</th>
                  <th>Thanh toán</th>
                  <th>Trạng thái</th>
                  <th>Ngày tạo</th>
                  <th>Chỉnh sửa</th>
                </tr>
              </thead>
              {orders.map((order) => (
                <OrdersShip order={order} key={order.id} />
              ))}
            </table>
          </div>

          {/* End Table Product */}
        </div>
      </div>
    </section>
  );
};

export default OrderShipMain;
