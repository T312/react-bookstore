import React from "react";
import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Orders from "./Orders";
import { useSelector } from "react-redux";

const OrderMain = () => {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  return (
    <section className='content-main'>
      <div className='content-header'>
        <h2 className='content-title'>Orders</h2>
      </div>

      <div className='card mb-4 shadow-sm'>
        <header className='card-header bg-white'>
          <div className='row gx-3 py-3'>
            <div className='col-lg-4 col-md-6 me-auto'>
              <input
                type='text'
                placeholder='Search...'
                className='form-control p-2'
              />
            </div>
            <div className='col-lg-2 col-6 col-md-3'>
              <select className='form-select'>
                <option>Status</option>
                <option>Active</option>
                <option>Disabled</option>
                <option>Show all</option>
              </select>
            </div>
            <div className='col-lg-2 col-6 col-md-3'>
              <select className='form-select'>
                <option>Show 20</option>
                <option>Show 30</option>
                <option>Show 40</option>
              </select>
            </div>
          </div>
        </header>
        <div className='card-body'>
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
          <div className='col-lg-12 col-lg-8'>
            <table className='table'>
              <thead>
                <tr>
                  <th>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                      />
                    </div>
                  </th>
                  {/* <th>ID</th> */}
                  <th>Customer</th>
                  <th>Order Code</th>
                  <th>Create At</th>
                  <th>Status</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th className='text-end'>Action</th>
                </tr>
              </thead>
              {/* Table Data */}
              <tbody>
                <tr>
                  <td>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                      />
                    </div>
                  </td>

                  <td>
                    <b>Nguyễn Thái Gia Long</b>
                  </td>
                  <td>1234</td>
                  <td>12/12/2022 12:20</td>
                  <td>Paid</td>
                  <td>3</td>
                  <td>169000 đ</td>
                  <td className='text-end'>
                    <div className='dropdown'>
                      <Link
                        to='#'
                        data-bs-toggle='dropdown'
                        className='btn btn-light'
                      >
                        <i className='fas fa-ellipsis-h'></i>
                      </Link>
                      <div className='dropdown-menu'>
                        <Link className='dropdown-item' to='#'>
                          View
                        </Link>
                        <Link className='dropdown-item text-danger' to='#'>
                          Edit
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                {/*  */}
                <tr>
                  <td>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                      />
                    </div>
                  </td>

                  <td>
                    <b>Lâm Trung Hiếu</b>
                  </td>
                  <td>1234</td>
                  <td>12/12/2022 12:20</td>
                  <td>Paid</td>
                  <td>3</td>
                  <td>169000 đ</td>
                  <td className='text-end'>
                    <div className='dropdown'>
                      <Link
                        to='#'
                        data-bs-toggle='dropdown'
                        className='btn btn-light'
                      >
                        <i className='fas fa-ellipsis-h'></i>
                      </Link>
                      <div className='dropdown-menu'>
                        <Link className='dropdown-item' to='#'>
                          View
                        </Link>
                        <Link className='dropdown-item text-danger' to='#'>
                          Edit
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                {/*  */}
                <tr>
                  <td>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                      />
                    </div>
                  </td>

                  <td>
                    <b>Dương Nhật Bong</b>
                  </td>
                  <td>1234</td>
                  <td>12/12/2022 12:20</td>
                  <td>Paid</td>
                  <td>3</td>
                  <td>169000 đ</td>
                  <td className='text-end'>
                    <div className='dropdown'>
                      <Link
                        to='#'
                        data-bs-toggle='dropdown'
                        className='btn btn-light'
                      >
                        <i className='fas fa-ellipsis-h'></i>
                      </Link>
                      <div className='dropdown-menu'>
                        <Link className='dropdown-item' to='#'>
                          View
                        </Link>
                        <Link className='dropdown-item text-danger' to='#'>
                          Edit
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* End Table Product */}
        </div>
      </div>
    </section>
  );
};

export default OrderMain;
