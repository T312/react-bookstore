import React from "react";
import Helmet from "../../components/helmet/Helmet";
import Button from "../../components/button/Button";
import Section, { SectionTitle } from "../../components/section/Section";
import "./notFound.scss";
import Image404 from "../../assets/images/2696450.jpg";
const notFound = () => {
  return (
    <Helmet title="Accessories">
      <div className="container">
        <Section>
          <SectionTitle>---------</SectionTitle>
          <SectionTitle className="title__404">Ooops... Error 404</SectionTitle>
          {/* <SectionTitle>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </SectionTitle> */}

          {/* <img src={Image404} alt="" /> */}
          <a href="/">Back to home</a>
        </Section>
      </div>
    </Helmet>
  );
};

export default notFound;
