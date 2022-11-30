import React from "react";
import Helmet from "../../components/helmet/Helmet";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Section, {
  SectionTitle,
  SectionBody,
} from "../../components/section/Section";
import "./about.scss";
import bg from "../../assets/images/shop.png";
import map from "../../assets/images/map.png";
import contact from "../../assets/images/contact.png";
//-------------------------

const About = () => {
  return (
    <Helmet title='About'>
      <div className='container'>
        <Section>
          <SectionTitle>-----</SectionTitle>
          <SectionBody>
            <div className='about'>
              <div className='about__title'>
                <h1>Giới thiệu</h1>
                <div className='about__title__contents'>
                  <h3>Chào mừng bạn đã đến với BookStore</h3>
                  <p>
                    Sách là sản phẩm trí tuệ của con người, được tích lũy thông
                    qua những kiến thức thực tiễn, nền văn hóa, lịch sử của các
                    dân tộc trên thế giới, đây là công cụ để chứng minh cho
                    những thành tựu của loài người trong quá trình hình thành và
                    phát triển. Trong xã hội hiện nay, sách được coi là một
                    phương thức quan trọng nhất để cung cấp nguồn tri thức trong
                    mọi lĩnh vực đời sống, xã hội, văn học…cho con người, được
                    coi là chìa khóa để mở ra thành công.
                  </p>
                  <div className='about__title__buttons'>
                    <Link to='/'>
                      <Button size='lg'>Xem thêm</Button>
                    </Link>
                  </div>
                </div>
                <div className='about__title__social'>
                  <Link to=''>
                    <i className='bx bxl-facebook'></i>
                  </Link>
                  <Link to=''>
                    <i className='bx bxl-twitter'></i>
                  </Link>
                  <Link to=''>
                    <i className='bx bxl-instagram-alt'></i>
                  </Link>
                </div>
              </div>
              <div className='about__imageBG'>
                <img src={bg} alt='' />
              </div>
            </div>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Liên hệ với chúng tôi</SectionTitle>
          <SectionBody>
            <div className='contact'>
              <form className='contact__info'>
                <div className='contact__info__input-container'>
                  {/* <i className='bx bxs-user icon'></i> */}
                  <input
                    className='contact__info__input-container__input-field'
                    type='text'
                    placeholder='Họ và tên'
                    name='name'
                  />
                </div>

                <div className='contact__info__input-container'>
                  {/* <i className='bx bx-envelope icon'></i> */}
                  <input
                    className='contact__info__input-container__input-field'
                    type='text'
                    placeholder='Email'
                    name='email'
                  />
                </div>

                <div className='contact__info__input-container'>
                  {/* <i className='bx bxs-edit-location icon'></i> */}
                  <input
                    className='contact__info__input-container__input-field'
                    type='password'
                    placeholder='Số điện thoại'
                    name='psw'
                  />
                </div>

                <div className='contact__info__btn'>
                  <Button size='md'>Liên hệ</Button>
                </div>
              </form>
            </div>
            {/* <div className='contact__png'>
                <img src={contact} alt='' />
              </div> */}

            <div className='contact__map'>
              <img src={map} alt='' />
            </div>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

export default About;
