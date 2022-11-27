import React, { useEffect, useState } from "react";
import CreateCategory from "./CreateCategory";
import CategoriesTable from "./CategoriesTable";
import { useDispatch, useSelector } from "react-redux";
const MainCategories = () => {
  // const category = useSelector((state) => state.createCategory);
  // useEffect(() => {}, category);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Categories</h2>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="card mb-4 ">
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
          </div>
          <div className="row">
            {/* Create category */}
            <CreateCategory />
            {/* Categories table */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCategories;
