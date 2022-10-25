import { useEffect } from "react";
import PropTypes from "prop-types";

//Hỗ trợ các thuộc tính cho thẻ body, html, title

const Helmet = (props) => {
  document.title = "Bookstore - " + props.title;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>{props.children}</div>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
