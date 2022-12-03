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
        <h2 className="content-title">Orders</h2>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Search..."
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Status</option>
                <option>Chờ lấy hàng</option>
                <option>Đang giao</option>
                <option>Đã giao</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Show 20</option>
                <option>Show 30</option>
                <option>Show 40</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="col-lg-12 col-lg-8 table-responsive">
            <table className="table" style={{ borderCollapse: "separate" }}>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Price</th>
                  <th>Paid</th>
                  <th>Status</th>
                  <th>Creat At</th>
                  <th>Edit</th>
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
