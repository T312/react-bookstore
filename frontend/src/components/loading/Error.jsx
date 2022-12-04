import React from "react";

const Message = ({ variant, children }) => {
  return (
    <div className=''>
      <div className={`alert ${variant}`}>{children}</div>
    </div>
  );
};

Message.defaultProps = {
  variant: "alert-info",
};

export default Message;
