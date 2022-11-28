import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Toast from "../LoadingError/Toast";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../Redux/Actions/CategoryActions";
import { listCategory } from "../../Redux/Actions/CategoryActions";
import CategoriesTable from "./CategoriesTable";
const CreateCategory = () => {
  const initState = {
    name: "",
    description: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(initState);
  // const [editCategory, setEditCategory] = useState({});
  // console.log(editCategory);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.createCategory);
  const onSubmit = async (data) => {
    try {
      dispatch(createCategory(data));

      setTimeout(() => {
        dispatch(listCategory(2, ""));
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  const [editCateName, setEditCategoryName] = useState("");
  const [editCateDesc, setEditCategoryDesc] = useState("");

  // const categoryEdit = callback();
  // console.log(categoryEdit);
  const setEditCategory = (items) => {
    console.log(items);
    setEditCategoryName(items.name);
    setEditCategoryDesc(items.description);
  };

  // useEffect(() => {
  //   console.log(editCateName);
  // }, [editCateName]);
  useEffect(() => {
    reset(initState);
  }, [category]);

  console.log(editCateName);
  return (
    <>
      <Toast />

      <div className="col-md-12 col-lg-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="product_name" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="form-control py-3"
              id="product_name"
              // value={editCateName}
              required
              {...register("name", { required: true })}
            />
          </div>
          {/* <div className="mb-4">
          <label className="form-label">Images</label>
          <input className="form-control" type="file" />
        </div> */}
          <div className="mb-4">
            <label className="form-label">Description</label>
            <textarea
              placeholder="Type here"
              className="form-control"
              rows="4"
              // value={editCateDesc}
              {...register("description", { required: true })}
            ></textarea>
          </div>

          <div className="d-grid">
            <button className="btn btn-primary py-2">Create category</button>
          </div>
        </form>
      </div>
      {/* <button onClick={() => setEditCategoryName("hungdt")}>kkajsh</button> */}
      <CategoriesTable
        // setEditCategory={() => setEditCategory(editCategory)}
        // editCategory={editCategory}
        parentCallback={setEditCategory}
      />
    </>
  );
};

export default CreateCategory;
