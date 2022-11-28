import React, { useState, useCallback, useRef, useEffect } from "react";

//-------------------------
import "./catalog.scss";
import Helmet from "../../components/helmet/Helmet";
// import Grid from "../components/grid/Grid";
// import ProductCard from "../components/productcard/ProductCard";
import Pagination from "../../components/pagination/Pagination";
import Sort from "../../components/sort/Sort";
import CheckBox from "../../components/checkbox/CheckBox";
import Button from "../../components/button/Button";
import Filter from "../../components/filter/Filter";
import InfinityList from "../../components/infinitylist/InfinityList";
//-------------------------
import Input from "../../components/input/Input";

//-------------------------

import Axios from "axios";
const Catalog = () => {
  const initialFilter = {
    category: [],
    author: [],
    provider: [],
    price: [],
  };
  const [obj, setObj] = useState({});
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [filterCategory, setFilterCategory] = useState(initialFilter);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [productsFilter, setProductsFilter] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const url = `http://localhost:8000/v1/product?page=${page}&search=${search}&sort=${
          sort.sort
        },${sort.order}&categories=${filterCategory.category.toString()}`;
        const { data } = await Axios.get(url);
        setObj(data);
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [search, page, sort, filterCategory]);

  const filterRef = useRef(null);

  const showHideFilter = () => filterRef.current.classList.toggle("active");
  const clearFilter = () => setFilterCategory(initialFilter);
  return (
    <Helmet title='Product'>
      <div className='container'>
        <div className='catalog'>
          <div className='catalog__filter' ref={filterRef}>
            <div
              className='catalog__filter__close'
              onClick={() => showHideFilter()}
            >
              <i className='bx bx-left-arrow-alt'></i>
            </div>
            <Filter
              filterCategory={filterCategory}
              setFilterCategory={(category) => setFilterCategory(category)}
            />
            <div className='catalog__filter__widget'>
              <div className='catalog__filter__widget__content'>
                <Button size='sm' onClick={clearFilter}>
                  hủy lọc
                </Button>
              </div>
            </div>
          </div>
          <div className='catalog__filter__toggle'>
            <Button size='sm' onClick={() => showHideFilter()}>
              bộ lọc
            </Button>
          </div>
          <div className='catalog__content'>
            <div className='header__menu__item header__menu__right__item'>
              <Input setSearch={(search) => setSearch(search)} />
              <Sort sort={sort} setSort={(sort) => setSort(sort)} />
            </div>
            {productsFilter.length != 0 ? (
              <InfinityList data={productsFilter} />
            ) : (
              <InfinityList data={products} />
            )}
            {/* <InfinityList data={products} /> */}
            <Pagination
              page={page}
              limit={obj.page ? obj.page : 0}
              total={obj.pages ? obj.pages : 0}
              setPage={(page) => setPage(page)}
            />
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
