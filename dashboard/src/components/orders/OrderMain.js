import React from "react";
import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Orders from "./Orders";
import { useSelector } from "react-redux";

const OrderMain = () => {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  console.log(orderList);
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
                <option>Active</option>
                <option>Disabled</option>
                <option>Show all</option>
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

                  <th>Customer</th>
                  <th>Email</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Creat At</th>
                  <th>Edit</th>
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
