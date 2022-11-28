import React from "react";
import numberWithCommas from "../../utils/numberWithCommas";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { orderListOfUser } from "../../features/order/pathAPI";

const OrderDetails = ({ orders }) => {
  const dispatch = useDispatch();
  const listOrderUser = useSelector((state) => state.listUserOrder);
  const { order } = listOrderUser;

  return (
    <div>
      <table className='table-order'>
        <thead>
          <tr>
            <th>Đơn hàng đã đặt</th>
            <th>Tổng số tiền</th>
            <th>Đã thanh toán</th>
            <th>Đã giao</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {order.map((order, index) => {
            const date = new Date(order.createdAt);
            return (
              <>
                <tr key={index}>
                  <td>
                    {`${date.getDate()}/${
                      date.getMonth() + 1
                    }/${date.getFullYear()} ${date.getHours()}:${
                      date.getMinutes() < 10
                        ? "0" + date.getMinutes()
                        : date.getMinutes()
                    }`}
                  </td>
                  <td>{numberWithCommas(order.totalPrice)} đ</td>
                  <td>
                    {order.isPaid ? (
                      <>
                        <i
                          class='bx bx-check-double'
                          style={{ fontSize: "2rem", color: "green" }}
                        ></i>
                      </>
                    ) : (
                      <>
                        <i
                          className='bx bx-x'
                          style={{ fontSize: "2rem", color: "red" }}
                        ></i>
                      </>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      <>
                        <i
                          class='bx bx-check-double'
                          style={{ fontSize: "2rem", color: "green" }}
                        ></i>
                      </>
                    ) : (
                      <>
                        <i
                          className='bx bx-x'
                          style={{ fontSize: "2rem", color: "red" }}
                        ></i>
                      </>
                    )}
                  </td>
                  <td>
                    <Link to='/view-details'>Xem chi tiết</Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
