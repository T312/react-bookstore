import React from "react";

const Comment = ({ review }) => {
  const dateReivew = new Date(review.createdAt);
  return (
    <>
      <div className="user-review">
        <div className="user-rating">
          <div className="username">
            <strong>{review.name}</strong>
          </div>
          <div className="stars">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bx-star"></i>
          </div>
        </div>
        <div className="comment-content">{review.comment}</div>
        <time>
          {`${dateReivew.getDate()}/${
            dateReivew.getMonth() + 1
          }/${dateReivew.getFullYear()}`}
        </time>
      </div>
    </>
  );
};

export default Comment;
