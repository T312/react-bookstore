import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const MainProducts = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const productDelete = useSelector((state) => state.productDelete);
  const { error: errorDelete, success: successDelete } = productDelete;
  const numberWithCommas = (num) =>
    num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "";

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch, successDelete]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Products</h2>
        <div>
          <Link to="/addproduct" className="btn btn-primary">
            Create new
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white ">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto ">
              <input
                type="search"
                placeholder="Search..."
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>All category</option>
                <option>Electronics</option>
                <option>Clothings</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Latest added</option>
                <option>Cheap first</option>
                <option>Most viewed</option>
              </select>
            </div>
          </div>
        </header>

        <div className="card-body">
          {/* {errorDelete && (
            <Message variant="alert-danger">{errorDelete}</Message>
          )}
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row">
    
              {products.map((product) => (
                <Product product={product} key={product._id} />
              ))}
            </div>
          )} */}

          {/* Table Product */}
          <div className="col-lg-12 col-lg-8">
            <table className="table" style={{ borderCollapse: "separate" }}>
              <thead>
                <tr>
                  <th>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </th>
                  {/* <th>ID</th> */}
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Create At</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Count</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              {/* Table Data */}
              <tbody>
                {products.map((product) => (
                  <Product product={product} key={product.id} />
                ))}
              </tbody>

              {/*                 
                <tr>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </td>
                  <td>2</td>
                  <td>
                    <b>Nhà giả kim</b>
                  </td>
                  <td>12/12/2022 12:30</td>
                  <td>Trinh thám</td>
                  <td>169000 đ</td>
                  <td className="text-end">
                    <div className="dropdown">
                      <Link
                        to="#"
                        data-bs-toggle="dropdown"
                        className="btn btn-light"
                      >
                        <i className="fas fa-ellipsis-h"></i>
                      </Link>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="#">
                          Edit info
                        </Link>
                        <Link className="dropdown-item text-danger" to="#">
                          Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                {/*  
                <tr>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </td>
                  <td>3</td>
                  <td>
                    <b>Nhà giả kim</b>
                  </td>
                  <td>12/12/2022 12:30</td>
                  <td>Trinh thám</td>
                  <td>169000 đ</td>
                  <td className="text-end">
                    <div className="dropdown">
                      <Link
                        to="#"
                        data-bs-toggle="dropdown"
                        className="btn btn-light"
                      >
                        <i className="fas fa-ellipsis-h"></i>
                      </Link>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="#">
                          Edit info
                        </Link>
                        <Link className="dropdown-item text-danger" to="#">
                          Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr> */}
              {/* </tbody> */}
            </table>
          </div>

          {/* End Table Product */}

          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
