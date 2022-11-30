import "./sort.scss";

const Sort = ({ sort, setSort }) => {
  const onSelectChange = ({ currentTarget: input }) => {
    setSort({ sort: input.value, order: sort.order });
  };

  const onArrowChange = () => {
    if (sort.order === "asc") {
      setSort({ sort: sort.sort, order: "desc" });
    } else {
      setSort({ sort: sort.sort, order: "asc" });
    }
  };

  return (
    <div className='sort'>
      <p className='sort__by'>Sắp xếp:</p>
      <select
        onChange={onSelectChange}
        className='sort__select'
        defaultValue={sort.sort}
      >
        <option value='isFeatured'>Sản phẩm mới</option>
        <option value='rating'>Đáng giá sản phẩm</option>
        <option value='price'>Giá sản phẩm</option>
        <option value='none'>Hủy lọc</option>
      </select>
      <button className='sort__arrow-btn' onClick={onArrowChange}>
        <i className='bx bx-filter' style={{ fontSize: "28px" }}></i>
        {/* <i class='bx bx-filter'></i> */}
      </button>
    </div>
  );
};

export default Sort;
