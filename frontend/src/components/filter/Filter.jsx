import React, { useState, useCallback, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../../components/checkbox/CheckBox";
import { getListCategory } from "../../features/category/pathAPI";
//---------------------------------
import author from "../../assets/fake-data/author";
import provider from "../../assets/fake-data/provider";
import productPrice from "../../assets/fake-data/product-price";
import Button from "../../components/button/Button";

const Filter = ({ filterCategory, setFilterCategory }) => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const categoryListApi = categoryList.category;

  useEffect(() => {
    dispatch(getListCategory());
  }, [dispatch]);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilterCategory({
            ...filterCategory,
            category: [...filterCategory.category, item.id],
          });
          break;
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filterCategory.category.filter(
            (e) => e !== item.id
          );
          setFilterCategory({ ...filterCategory, category: newCategory });
          break;
        default:
      }
    }
  };

  return (
    <>
      <div className="catalog__filter__widget">
        <div className="catalog__filter__widget__title">danh mục sản phẩm</div>
        <div className="catalog__filter__widget__content">
          {categoryListApi.map((item, index) => (
            <div key={index} className="catalog__filter__widget__content__item">
              <CheckBox
                label={item.name}
                onChange={(input) =>
                  filterSelect("CATEGORY", input.checked, item)
                }
                checked={filterCategory.category.includes(item.id)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="catalog__filter__widget">
        <div className="catalog__filter__widget__title">Nhà cung cấp</div>
        <div className="catalog__filter__widget__content">
          {provider.map((item, index) => (
            <div key={index} className="catalog__filter__widget__content__item">
              <CheckBox
                label={item.display}
                onChange={(input) =>
                  filterSelect("PROVIDER", input.checked, item)
                }
                checked={filterCategory.provider.includes(item.provider)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="catalog__filter__widget">
        <div className="catalog__filter__widget__title">Giá sản phẩm</div>
        <div className="catalog__filter__widget__content">
          {productPrice.map((item, index) => (
            <div key={index} className="catalog__filter__widget__content__item">
              <CheckBox
                label={item.display}
                onChange={(input) => filterSelect("PRICE", input.checked, item)}
                checked={filterCategory.price.includes(item.price)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="catalog__filter__widget">
        <div className="catalog__filter__widget__title">Tác giả</div>
        <div className="catalog__filter__widget__content">
          {author.map((item, index) => (
            <div key={index} className="catalog__filter__widget__content__item">
              <CheckBox
                label={item.display}
                onChange={(input) =>
                  filterSelect("AUTHOR", input.checked, item)
                }
                checked={filterCategory.author.includes(item.author)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filter;
