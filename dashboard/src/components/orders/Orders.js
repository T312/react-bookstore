import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Orders = ({ order }) => {
  console.log(order);
  const { name, id, createdAt, isPaid, status, orderItems, user, totalPrice } =
    order;
  const date = new Date(createdAt);
  console.log(order);
  const quantity = orderItems.reduce((a, b) => a + Number(b.quantity), 0);
  return (
    <tbody>
      <tr>
        <td>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" />
          </div>
        </td>

        <td>
          <b>{user.name}</b>
        </td>
        <td>{id}</td>
        <td>{`${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`}</td>
        <td>{isPaid ? "Paid" : "Unpaid"}</td>

        <td>{quantity}</td>
        <td> {totalPrice}</td>
        <td className="text-end">
          <div className="dropdown">
            <Link to="#" data-bs-toggle="dropdown" className="btn btn-light">
              <i className="fas fa-ellipsis-h"></i>
            </Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="#">
                View
              </Link>
              <Link className="dropdown-item text-danger" to="#">
                Edit
              </Link>
            </div>
          </div>
        </td>
      </tr>
      {/*  */}
    </tbody>
  );
};

export default Orders;
