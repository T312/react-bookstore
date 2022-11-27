import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../Redux/Actions/ProductActions";

const Product = ({ product }) => {
  const { name, descriptionImages, category, price, createdAt, countInStock } =
    product;
  const date = new Date(createdAt);
  const dispatch = useDispatch();

  const deletehandler = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <>
      <tr className="">
        <td>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" />
          </div>
        </td>
        <td>
          <img src={descriptionImages[0].link} style={{ height: "50px" }} />
        </td>
        <td>
          <div>{name}</div>
        </td>

        <td>{`${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`}</td>
        <td>{category.name}</td>
        <td>{price}</td>
        <td>{countInStock}</td>
        <td className="text-end">
          <div className="dropdown">
            <Link to="#" data-bs-toggle="dropdown" className="btn btn-light">
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
    </>
  );
};

export default Product;
