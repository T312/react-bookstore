import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numberWithCommas from "../../config/numberWithCommas";

const OrdersShip = ({ order }) => {
  return (
    <tr key={order._id}>
      <td>
        <b>{order.user.name}</b>
      </td>
      <td>{order.user.email}</td>
      <td>{numberWithCommas(order.totalPrice)} đ</td>
      <td>
        {order.isPaid ? (
          <span
            className="badge rounded-pill alert-success"
            style={{ backgroundColor: "#d1e7dd" }}
          >
            Đã thanh toán {moment(order.paidAt).format("MMM Do YY")}
          </span>
        ) : (
          <span
            className="badge rounded-pill alert-danger"
            style={{ backgroundColor: "#f8d7da" }}
          >
            Chưa thanh toán
          </span>
        )}
      </td>
      <td>{order.status}</td>
      <td>{moment(order.createdAt).calendar()}</td>
      <td className="d-flex justify-content-end align-item-center">
        <Link to={`/shipping/${order._id}`} className="text-success">
          <i className="fas fa-eye"></i>
        </Link>
      </td>
    </tr>
  );
};

export default OrdersShip;
