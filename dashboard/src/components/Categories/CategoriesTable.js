import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listCategory } from "../../Redux/Actions/CategoryActions";
import { deleteCategory } from "../../Redux/Actions/CategoryActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const CategoriesTable = ({ parentCallback }) => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, category } = categoryList;
  const [editCategory, setEditCategory] = useState({});
  useEffect(() => {
    dispatch(listCategory(2, ""));
  }, [dispatch]);
  const handelDelete = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(deleteCategory(id));
      setTimeout(() => {
        dispatch(listCategory(2, ""));
      }, 500);
    }
  };

  // const handelEdit = (item) => {
  //   setEditCategory(item);
  //   console.log("item:", item);
  // };
  return (
    <div className="col-md-12 col-lg-8">
      <table className="table" style={{ borderCollapse: "separate" }}>
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {category.map((item, index, key = index) => {
            return (
              // {key = index}

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
                <td>{index + 1}</td>
                <td>
                  <b>{item.name}</b>
                </td>
                <td>{item.description}</td>
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
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={() => {
                          setEditCategory(item);
                          parentCallback(item);
                        }}
                      >
                        Edit info
                      </Link>
                      <Link
                        className="dropdown-item text-danger"
                        to="#"
                        onClick={() => {
                          handelDelete(item.id);
                        }}
                      >
                        Delete
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
        {/* Table Data */}
      </table>
    </div>
  );
};

export default CategoriesTable;
