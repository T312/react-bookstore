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
    <table className="table border table-lg">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Product</th>
          <th style={{ width: "20%" }}>Unit Price</th>
          <th style={{ width: "20%" }}>Quantity</th>
          <th style={{ width: "20%" }} className="text-end">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {order.orderItems.map((item, index) => (
          <tr key={index}>
            <td>
              <Link className="itemside" to="#">
                <div className="left">
                  <img
                    src={item.product.descriptionImages[0].link}
                    alt={item.product.name}
                    style={{ width: "40px", height: "40px" }}
                    className="img-xs"
                  />
                </div>
                <div className="info">{item.product.name}</div>
              </Link>
            </td>
            <td>{numberWithCommas(item.product.price)} </td>
            <td>{item.quantity} </td>
            <td className="text-end">
              {" "}
              {numberWithCommas(item.product.price * item.quantity)}
            </td>
          </tr>
        ))}

        <tr>
          <td colSpan="4">
            <article className="float-end">
              <dl className="dlist">
                <dt>Subtotal:</dt> <dd>{numberWithCommas(order.itemsPrice)}</dd>
              </dl>
              <dl className="dlist">
                <dt>Shipping cost:</dt>{" "}
                <dd>{numberWithCommas(order.shippingPrice)}</dd>
              </dl>
              <dl className="dlist">
                <dt>Sales cost:</dt>{" "}
                <dd>{numberWithCommas(order.itemsPrice * 0.1)}</dd>
              </dl>
              <dl className="dlist">
                <dt>Grand total:</dt>
                <dd>
                  <b className="h5">{numberWithCommas(order.totalPrice)}</b>
                </dd>
              </dl>
              <dl className="dlist">
                <dt className="text-muted">Status:</dt>
                <dd>
                  {order.isPaid ? (
                    <span className="badge rounded-pill alert alert-success text-success">
                      Payment done
                    </span>
                  ) : (
                    <span className="badge rounded-pill alert alert-danger text-danger">
                      Not Paid
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
