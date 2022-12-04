import React from "react";

import "./input.scss";

const Input = ({ setSearch }) => {
  return (
    <input
      className='input-component'
      type='text'
      placeholder='Tìm kiếm'
      // value={props.value}
      onChange={({ currentTarget: input }) => setSearch(input.value)}
      // onChange={props.onChange ? (e) => props.onChange(e) : null}
    />
  );
};

export default Input;
