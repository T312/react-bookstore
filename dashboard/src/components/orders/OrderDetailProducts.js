import React from "react";
import { Link } from "react-router-dom";
import numberWithCommas from "../../config/numberWithCommas";
const OrderDetailProducts = (props) => {
  console.log(props);
  const { order, loading } = props;

  if (!loading) {
    // Calculate Price
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    // order.itemsPrice = addDecimals(
    //   order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    // );
  }

  return (
    <table className='table border table-lg'>
      <thead>
        <tr>
          <th style={{ width: "60%" }}>Sản phẩm</th>
          <th style={{ width: "20%" }}>Giá</th>
          <th style={{ width: "20%" }}>Số lượng</th>
          <th style={{ width: "20%" }} className='text-end'>
            Tổng tiền
          </th>
        </tr>
      </thead>
      <tbody>
        {order.orderItems.map((item, index) => (
          <tr key={index}>
            <td>
              <Link className='itemside' to='#'>
                <div className='left'>
                  <img
                    src={item.product.descriptionImages[0].link}
                    alt={item.product.name}
                    style={{ width: "40px", height: "40px" }}
                    className='img-xs'
                  />
                </div>
                <div className='info'>{item.product.name}</div>
              </Link>
            </td>
            <td>{numberWithCommas(item.product.price)} </td>
            <td>{item.quantity} </td>
            <td className='text-end'>
              {" "}
              {numberWithCommas(item.product.price * item.quantity)}
            </td>
          </tr>
        ))}

        <tr>
          <td colSpan='4'>
            <article className='float-end'>
              <dl className='dlist'>
                <dt>Tổng giả sản phẩm:</dt> <dd>{numberWithCommas(order.itemsPrice)}</dd>
              </dl>
              <dl className='dlist'>
                <dt>Chi phí giao hàng:</dt>{" "}
                <dd>{numberWithCommas(order.shippingPrice)}</dd>
              </dl>
              <dl className='dlist'>
                <dt>Khuyến mãi:</dt>{" "}
                <dd>{numberWithCommas(order.itemsPrice * 0.1)}</dd>
              </dl>
              <dl className='dlist'>
                <dt>Thành tiền:</dt>
                <dd>
                  <b className='h5'>{numberWithCommas(order.totalPrice)}</b>
                </dd>
              </dl>
              <dl className='dlist'>
                <dt className='text-muted'>Trạng thái:</dt>
                <dd>
                  {order.isPaid ? (
                    <span className='badge rounded-pill alert alert-success text-success'>
                      Đã thanh toán
                    </span>
                  ) : (
                    <span className='badge rounded-pill alert alert-danger text-danger'>
                      Chưa thanh toán
                    </span>
                  )}
                </dd>
              </dl>
            </article>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDetailProducts;
