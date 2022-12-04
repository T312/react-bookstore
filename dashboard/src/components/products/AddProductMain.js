import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PRODUCT_CREATE_RESET } from "../../Redux/Constants/ProductConstants";
import { createProduct } from "./../../Redux/Actions/ProductActions";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import DropFileInput from "../DropFileInput/DropFile";
import { useForm } from "react-hook-form";
import { listCategory } from "../../Redux/Actions/CategoryActions";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const initState = {
  name: "",
  description: "",
  category: "",
  price: "",
  countInStock: "",
  author: "",
  publisher: "",
};

const AddProductMain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const form = new FormData();
      files.forEach((file, i) => {
        form.append(`descriptionImages`, file);
      });
      form.append("name", data.name);
      form.append("description", data.description);
      form.append("category", data.category);
      form.append("price", data.price);
      form.append("countInStock", data.countInStock);
      form.append("author", data.author);
      form.append("publisher", data.publisher);

      console.log(data.category);
      dispatch(createProduct(form));
      reset(initState);
      toast("Đăng bài thành công");
      setFiles([]);
    } catch (error) {
      console.log(error);
    }
  };
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategory(2, ""));
  }, []);

  const categoryList = useSelector((state) => state.categoryList);
  const { category } = categoryList;

  const productCreate = useSelector((state) => state.productCreate);
  const { loading, error, product } = productCreate;

  const onFileChange = (files) => {
    setFiles(files);
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="content-header">
            <h2 className="content-title">Add product</h2>
          </div>

          <div className="row mb-2">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {error && <Message variant="alert-danger">{error}</Message>}
                  {loading && <Loading />}
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Product title"
                      className="form-control"
                      id="product_title"
                      required
                      // onChange={(e) => setName(e.target.value)}
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      style={{ minHeight: " calc(10.5em + 0.75rem + 2px" }}
                      placeholder="Description"
                      className="form-control"
                      rows="7"
                      required
                      // onChange={(e) => setDescription(e.target.value)}
                      {...register("description", { required: true })}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <DropFileInput
                      onFileChange={(files) => onFileChange(files)}
                      value={files}
                      setValue={setFiles}
                      // {...register("files", { required: true })}
                    />
                    {/* <input
                      type="file"
                      {...register("file", { required: true })}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mb-4">
                <label htmlFor="product_price" className="form-label">
                  Category
                </label>
                <select
                  className="form-select"
                  {...register("category", { required: true })}
                >
                  {category.map((cate) => {
                    return (
                      <option
                        value={cate.id}
                        // {...register("category", { required: true })}
                      >
                        {cate.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="product_price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="form-control"
                  id="product_price"
                  required
                  // onChange={(e) => setPrice(e.target.value)}\
                  {...register("price", { required: true })}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="product_price" className="form-label">
                  Count In Stock
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="form-control"
                  id="product_price"
                  required
                  // onChange={(e) => setCountInStock(e.target.value)}
                  {...register("countInStock", { required: true })}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="product_price" className="form-label">
                  Publisher
                </label>
                <input
                  type="text"
                  placeholder="Publisher"
                  className="form-control"
                  id="product_title"
                  required
                  // onChange={(e) => setName(e.target.value)}
                  {...register("publisher", { required: true })}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="product_price" className="form-label">
                  Author
                </label>
                <input
                  type="text"
                  placeholder="Author"
                  className="form-control"
                  id="product_title"
                  required
                  // onChange={(e) => setName(e.target.value)}
                  {...register("author", { required: true })}
                />
              </div>
            </div>
          </div>
          <div className="btn-submit">
            <div className="btn-action">
              <Link
                to="/products"
                className="btn btn-primary  text-white "
                style={{ background: "#dc3545 !important" }}
              >
                Go to products
              </Link>
            </div>
            <div className="btn-action">
              <button type="submit" className="btn btn-primary">
                Publish now
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddProductMain;
