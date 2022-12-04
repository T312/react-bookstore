import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numberWithCommas from "../../config/numberWithCommas";

const Orders = ({ order }) => {
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
      <td>
        {order.status !== "Đã hủy" ? (
          <span
            className="badge rounded-pill alert-success"
            style={{ backgroundColor: "#d1e7dd" }}
          >
            {order.status}
          </span>
        ) : (
          <span
            className="badge rounded-pill alert-danger"
            style={{ backgroundColor: "#f8d7da" }}
          >
            {order.status}
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
