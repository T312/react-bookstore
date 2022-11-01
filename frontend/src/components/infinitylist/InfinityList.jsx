import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import Grid from "../grid/Grid";
import ProductCard from "../productcard/ProductCard";

const InfinityList = (props) => {
  const perLoad = 6; // items each load

  const listRef = useRef(null);

  const [data, setData] = useState([]);

  // console.log("Data: ", data);

  const [load, setLoad] = useState(true);

  // console.log("Load: ", load);

  const [index, setIndex] = useState(0);

  // console.log("Index: ", index);

  useEffect(() => {
    setData(props.data.slice(0, perLoad));
    setIndex(1);
  }, [props.data]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (listRef && listRef.current) {
        if (
          window.scrollY + window.innerHeight >=
          listRef.current.clientHeight + listRef.current.offsetTop + 200
        ) {
          console.log("bottom reach");
          setLoad(true);
        }
      }
    });
  }, [listRef]);

  useEffect(() => {
    const getItems = () => {
      const pages = Math.floor(props.data.length / perLoad);
      const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1;

      if (load && index <= maxIndex) {
        const start = perLoad * index;
        const end = start + perLoad;

        setData(data.concat(props.data.slice(start, end)));
        setIndex(index + 1);
      }
    };
    getItems();
    setLoad(false);
  }, [load, index, data, props.data]);

  return (
    <div ref={listRef}>
      <Grid col={4} mdCol={2} smCol={1} gap={20}>
        {data.map((item, index) => (
          <ProductCard
            key={index}
            image={item.descriptionImages[0].link}
            name={item.name}
            author={item.author}
            rating={item.rating}
            price={Number(item.price)}
            id={item.id}
          />
        ))}
      </Grid>
    </div>
  );
};

InfinityList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default InfinityList;
