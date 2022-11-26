import React from "react";
import numberWithCommas from "../../utils/numberWithCommas";
import { Link } from "react-router-dom";
const OrderDetails = () => {
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
          <tr>
            <td>12/11/2022 9:30</td>
            <td>{numberWithCommas(138000)} đ</td>
            <td>
              <i
                className='bx bx-x'
                style={{ fontSize: "2rem", color: "red" }}
              ></i>
            </td>
            <td>
              <i
                className='bx bx-x'
                style={{ fontSize: "2rem", color: "red" }}
              ></i>
            </td>
            <td>
              <Link to='/'>Xem đơn hàng</Link>
            </td>
          </tr>
          <tr>
            <td>15/11/2022 12:30</td>
            <td>{numberWithCommas(138000)} đ</td>
            <td>
              <i
                className='bx bx-x'
                style={{ fontSize: "2rem", color: "red" }}
              ></i>
            </td>
            <td>
              <i
                className='bx bx-x'
                style={{ fontSize: "2rem", color: "red" }}
              ></i>
            </td>
            <td>
              <Link to='/'>Xem đơn hàng</Link>
            </td>
          </tr>
          <tr>
            <td>20/11/2022 13:30</td>
            <td>{numberWithCommas(138000)} đ</td>
            <td>
              <i
                className='bx bx-x'
                style={{ fontSize: "2rem", color: "red" }}
              ></i>
            </td>
            <td>
              <i
                className='bx bx-x'
                style={{ fontSize: "2rem", color: "red" }}
              ></i>
            </td>
            <td>
              <Link to='/'>Xem đơn hàng</Link>
            </td>
          </tr>
          <tr>
            <td>21/11/2022 17:00</td>
            <td>{numberWithCommas(138000)} đ</td>
            <td>
              <i
                className='bx bx-x'
                style={{ fontSize: "2rem", color: "red" }}
              ></i>
            </td>
            <td>
              <i
                className='bx bx-x'
                style={{ fontSize: "2rem", color: "red" }}
              ></i>
            </td>
            <td>
              <Link to='/'>Xem đơn hàng</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
