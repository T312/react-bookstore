import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numberWithCommas from "../../config/numberWithCommas";
const Orders = ({ order }) => {
  // console.log(order);
  // const { name, id, createdAt, isPaid, status, orderItems, user, totalPrice } =
  //   order;
  // const date = new Date(createdAt);
  // const quantity = orderItems.reduce((a, b) => a + Number(b.quantity), 0);
  return (
    // <tbody>
    //   <tr>
    //     <td>
    //       <div className="form-check">
    //         <input className="form-check-input" type="checkbox" value="" />
    //       </div>
    //     </td>

    //     <td>
    //       <b>{user.name}</b>
    //     </td>
    //     <td>{id}</td>
    //     <td>{`${date.getDate()}/${
    //       date.getMonth() + 1
    //     }/${date.getFullYear()}`}</td>
    //     <td>{isPaid ? "Paid" : "Unpaid"}</td>

    //     <td>{quantity}</td>
    //     <td> {totalPrice}</td>
    //     <td className="text-end">
    //       <div className="dropdown">
    //         <Link to="#" data-bs-toggle="dropdown" className="btn btn-light">
    //           <i className="fas fa-ellipsis-h"></i>
    //         </Link>
    //         <div className="dropdown-menu">
    //           <Link className="dropdown-item" to="#">
    //             View
    //           </Link>
    //           <Link className="dropdown-item text-danger" to="#">
    //             Edit
    //           </Link>
    //         </div>
    //       </div>
    //     </td>
    //   </tr>
    //   {/*  */}
    // </tbody>
    // <div className="table-responsive">
    //   <table className="table">
    //     <tbody>
    //       {order.map((order) => (
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
            Paid At {moment(order.paidAt).format("MMM Do YY")}
          </span>
        ) : (
          <span
            className="badge rounded-pill alert-danger"
            style={{ backgroundColor: "#f8d7da" }}
          >
            Not Paid
          </span>
        )}
      </td>
      <td>{moment(order.createdAt).calendar()}</td>
      <td className="d-flex justify-content-end align-item-center">
        <Link to={`/order/${order._id}`} className="text-success">
          <i className="fas fa-eye"></i>
        </Link>
      </td>
    </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default Orders;
