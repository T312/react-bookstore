import React, { useState, useCallback, useRef, useEffect } from "react";
//-------------------------
import "../scss/components/catalog.scss";
import Helmet from "../components/helmet/Helmet";
// import Grid from "../components/grid/Grid";
// import ProductCard from "../components/productcard/ProductCard";
import CheckBox from "../components/checkbox/CheckBox";
import Button from "../components/button/Button";
import InfinityList from "../components/infinitylist/InfinityList";

//-------------------------
import productData from "../data/products";
import category from "../assets/fake-data/category";
import author from "../assets/fake-data/author";
import provider from "../assets/fake-data/provider";
import productPrice from "../assets/fake-data/product-price";

const Catalog = () => {
  // Tạo bộ lọc ban đầu
  const initialFilter = {
    category: [],
    author: [],
    provider: [],
    price: [],
  };

  // Get all sản phẩm
  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);

  // console.log(products);

  // filter
  const [filter, setFilter] = useState(initialFilter);

  // console.log(filter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "AUTHOR":
          setFilter({ ...filter, author: [...filter.author, item.author] });
          break;
        case "PROVIDER":
          setFilter({
            ...filter,
            provider: [...filter.provider, item.provider],
          });
          break;
        case "PRICE":
          setFilter({ ...filter, price: [...filter.price, item.price] });
          break;
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug,
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "AUTHOR":
          const newAuthor = filter.author.filter((e) => e !== item.author);
          setFilter({ ...filter, author: newAuthor });
          break;
        case "PROVIDER":
          const newProvider = filter.provider.filter(
            (e) => e !== item.provider,
          );
          setFilter({ ...filter, provider: newProvider });
          break;
        case "PRICE":
          const newPrice = filter.price.filter((e) => e !== item.price);
          setFilter({ ...filter, price: newPrice });
          break;
        default:
      }
    }
  };

  const clearFilter = () => setFilter(initialFilter);

  const updateProducts = useCallback(() => {
    let temp = productList;
    // danh mục
    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }
    // tác giả
    if (filter.author.length > 0) {
      temp = temp.filter((e) => {
        const check = e.author.find((author) => filter.author.includes(author));
        return check !== undefined;
      });
    }
    // nhà cc
    if (filter.provider.length > 0) {
      temp = temp.filter((e) => {
        const check = e.provider.find((provider) =>
          filter.provider.includes(provider),
        );
        return check !== undefined;
      });
    }
    // giá
    if (filter.price.length > 0) {
      temp = temp.filter((e) => {
        const check = e.productPrice.find((price) =>
          filter.productPrice.includes(price),
        );
        return check !== undefined;
      });
    }
    setProducts(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const filterRef = useRef(null);

  const showHideFilter = () => filterRef.current.classList.toggle("active");

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
            <div className='catalog__filter__widget'>
              <div className='catalog__filter__widget__title'>
                danh mục sản phẩm
              </div>
              <div className='catalog__filter__widget__content'>
                {category.map((item, index) => (
                  <div
                    key={index}
                    className='catalog__filter__widget__content__item'
                  >
                    <CheckBox
                      label={item.display}
                      onChange={(input) =>
                        filterSelect("CATEGORY", input.checked, item)
                      }
                      checked={filter.category.includes(item.categorySlug)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className='catalog__filter__widget'>
              <div className='catalog__filter__widget__title'>Nhà cung cấp</div>
              <div className='catalog__filter__widget__content'>
                {provider.map((item, index) => (
                  <div
                    key={index}
                    className='catalog__filter__widget__content__item'
                  >
                    <CheckBox
                      label={item.display}
                      onChange={(input) =>
                        filterSelect("PROVIDER", input.checked, item)
                      }
                      checked={filter.provider.includes(item.provider)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className='catalog__filter__widget'>
              <div className='catalog__filter__widget__title'>Giá sản phẩm</div>
              <div className='catalog__filter__widget__content'>
                {productPrice.map((item, index) => (
                  <div
                    key={index}
                    className='catalog__filter__widget__content__item'
                  >
                    <CheckBox
                      label={item.display}
                      onChange={(input) =>
                        filterSelect("PRICE", input.checked, item)
                      }
                      checked={filter.price.includes(item.price)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className='catalog__filter__widget'>
              <div className='catalog__filter__widget__title'>Tác giả</div>
              <div className='catalog__filter__widget__content'>
                {author.map((item, index) => (
                  <div
                    key={index}
                    className='catalog__filter__widget__content__item'
                  >
                    <CheckBox
                      label={item.display}
                      onChange={(input) =>
                        filterSelect("AUTHOR", input.checked, item)
                      }
                      checked={filter.author.includes(item.author)}
                    />
                  </div>
                ))}
              </div>
            </div>

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
            <InfinityList data={products} />
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
