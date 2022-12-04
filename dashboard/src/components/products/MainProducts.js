import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../Redux/Actions/ProductActions";
import { listCategory } from "../../Redux/Actions/CategoryActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import Pagination from "../paginate/Pagination";
import Axios from "axios";
const MainProducts = () => {
  const dispatch = useDispatch();

  // const productList = useSelector((state) => state.productList);
  // const { loading, error, products } = productList;
  // ---------------- Pagination-----------------
  const productDelete = useSelector((state) => state.productDelete);
  const { error: errorDelete, success: successDelete } = productDelete;
  //-----------------------------------------
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const [obj, setObj] = useState({});
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const url = `http://localhost:8000/v1/product?page=${page}&search=${search}&categories=${filterCategory.toString()}`;
        const { data } = await Axios.get(url);
        console.log("Pagination:", data.products);
        setObj(data);
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [search, page, filterCategory]);

  // const handlePageClick = (nextPage) => {
  //   // console.log("handlePageClick:", data.selected);
  //   setPage(nextPage + 1);
  // };

  // ----------------End Pagination-----------------
  useEffect(() => {
    dispatch(listProducts());
    dispatch(listCategory(2, ""));
  }, [dispatch, successDelete]);
  const { category } = useSelector((state) => state.categoryList);

  return (
    <section className='content-main'>
      <div className='content-header'>
        <h2 className='content-title'>Sản phẩm</h2>
        <div>
          <Link to='/addproduct' className='btn btn-primary'>
            Tạo mới
          </Link>
        </div>
      </div>

      <div className='card mb-4 shadow-sm'>
        <header className='card-header bg-white '>
          <div className='row gx-3 py-3'>
            <div className='col-lg-4 col-md-6 me-auto '>
              <input
                type='search'
                placeholder='Tìm kiếm...'
                className='form-control p-2'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className='col-lg-2 col-6 col-md-3'>
              <select
                className='form-select'
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option>Tất cả</option>
                {category.map((item, index, key = index) => {
                  return (
                    <>
                      <option value={item._id}>{item.name}</option>
                    </>
                  );
                })}
                {/* <option>Electronics</option>
                <option>Clothings</option>
                <option>Something else</option> */}
              </select>
            </div>
            {/* <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Latest added</option>
                <option>Cheap first</option>
                <option>Most viewed</option>
              </select>
            </div> */}
          </div>
        </header>

        <div className='card-body'>
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
          <div className='col-lg-12 col-lg-8'>
            <table className='table' style={{ borderCollapse: "separate" }}>
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
                  <th>Ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Ngày đăng</th>
                  <th>Thể loại</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th className='text-end'>Trạng thái</th>
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

          {/* Pagination */}
          {/* <nav className="float-end mt-4" aria-label="Page navigation">
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
                <Link
                  className="page-link"
                  to="#"
                  onClick={() => {
                    setPage(2);
                  }}
                >
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link
                  className="page-link"
                  to="#"
                  onClick={() => {
                    setPage(3);
                  }}
                >
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav> */}
          <Pagination
            page={page}
            limit={obj.page ? obj.page : 0}
            total={obj.pages ? obj.pages : 0}
            setPage={(page) => setPage(page)}
          />
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
