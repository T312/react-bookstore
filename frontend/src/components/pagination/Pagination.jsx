import "./pagination.css";

const Pagination = ({ page, total, limit, setPage }) => {
  const totalPages = Math.ceil(total);

  const onClick = (newPage) => {
    setPage(newPage + 1);
  };

  return (
    <div className="container_pagination">
      {totalPages > 0 &&
        [...Array(totalPages)].map((val, index) => (
          <button
            onClick={() => onClick(index)}
            className={page === index + 1 ? "page_btn act" : "page_btn"}
            key={index}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
