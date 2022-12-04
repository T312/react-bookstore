import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listUser } from "../../Redux/Actions/userActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const UserComponent = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const [limitUser, setLimitUser] = useState({});
  const [search, setSearch] = useState("");
  const { loading, error, users } = userList;

  const onSelectChange = ({ currentTarget: input }) => {
    setLimitUser({ limit: input.value });
  };

  useEffect(() => {
    dispatch(listUser(limitUser, search));
  }, [dispatch, limitUser, search]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Khách hàng</h2>
        <div>
          <Link to="#" className="btn btn-primary">
            <i className="material-icons md-plus"></i> Tạo mới
          </Link>
        </div>
      </div>

      <div className="card mb-4">
        <header className="card-header">
          <div className="row gx-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="form-control"
                onChange={({ currentTarget: input }) => setSearch(input.value)}
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select
                className="form-select"
                onChange={onSelectChange}
                defaultValue={limitUser}
              >
                <option>Tất cả</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
        </header>

        {/* Card */}
        <div className="card-body">
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
              {users.map((user) => (
                <div className="col" key={user.id}>
                  <div className="card card-user shadow-sm">
                    <div className="card-header">
                      <img
                        className="img-md img-avatar"
                        src="images/favicon.png"
                        alt="User pic"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title mt-5">{user.name}</h5>
                      <div className="card-text text-muted">
                        {user.isAdmin === true ? (
                          <p className="m-0">Admin</p>
                        ) : (
                          <p className="m-0">Khách hàng</p>
                        )}

                        <p>
                          <a href={`mailto:${user.email}`}>{user.email}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* nav */}
          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Trước
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Kế tiếp
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default UserComponent;
