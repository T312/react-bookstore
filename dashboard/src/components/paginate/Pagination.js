import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ page, total, limit, setPage }) => {
  const totalPages = Math.ceil(total);

  const handlePageClick = (newPage) => {
    setPage(newPage + 1);
  };

  return (
    <div div className='container_pagination'>
      {totalPages > 0 &&
        [...Array(totalPages)].map((val, index) => (
          <button
            onClick={() => handlePageClick(index)}
            className={page === index + 1 ? "page_btn act" : "page_btn"}
            key={index}
          >
            {index + 1}
          </button>
          // <ReactPaginate
          //   previousLabel={"<< Previous"}
          //   breakLabel={"..."}
          //   nextLabel={"Next >>"}
          //   pageCount={5}
          //   marginPagesDisplayed={2}
          //   pageRangeDisplayed={3}
          //   onPageChange={handlePageClick}
          //   containerClassName={"pagination justify-content-center"}
          //   pageClassName={"page-item"}
          //   pageLinkClassName={"page-link"}
          //   previousClassName={"page-item"}
          //   previousLinkClassName={"page-link"}
          //   nextClassName={"page-item"}
          //   nextLinkClassName={"page-link"}
          //   breakClassName={"page-item"}
          //   breakLinkClassName={"page-link"}
          //   activeClassName={"active"}
          //   key={index + 1}
          // />
        ))}
    </div>
  );
};

export default Pagination;
