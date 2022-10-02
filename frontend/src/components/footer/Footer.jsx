import React from "react";

import { Link } from "react-router-dom";

import Grid from "../grid/Grid";

import logo from "../../assets/logo2.png";

import "./footer.scss";

const footerAboutLinks = [
  {
    display: "Giới thiệu",
    path: "/about",
  },
  {
    display: "Liên hệ",
    path: "/about",
  },
  {
    display: "Tuyển dụng",
    path: "/about",
  },
  {
    display: "Tin tức",
    path: "/about",
  },
  {
    display: "Hệ thống cửa hàng",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Chính sách đổi trả",
    path: "/about",
  },

  {
    display: "Chính sách hoàn tiền",
    path: "/about",
  },
];
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className='footer__title'>Tổng đài hỗ trợ</div>
            <div className='footer__content'>
              <p>
                Liên hệ đặt hàng <strong>0123456789</strong>
              </p>
              <p>
                Thắc mắc đơn hàng <strong>0123456789</strong>
              </p>
              <p>
                Góp ý, khiếu nại <strong>0123456789</strong>
              </p>
            </div>
          </div>
          <div>
            <div className='footer__title'>Về Cửa hàng</div>
            <div className='footer__content'>
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className='footer__title'>Chăm sóc khách hàng</div>
            <div className='footer__content'>
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className='footer__about'>
            <p>
              <Link to='/'>
                <img src={logo} className='footer__logo' alt='' />
              </Link>
            </p>
            <p>
              “Một cuốn sách hay trên giá sách là một người bạn dù quay lưng lại
              nhưng vẫn là bạn tốt. Những cuốn sách khiến bạn có tư duy sắc bén
              hơn, cuộc sống thú vị hơn, tinh thần nâng cao hơn, mức độ căng
              thẳng giảm đi và trái tim biết động lòng trắc ẩn hơn”.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
