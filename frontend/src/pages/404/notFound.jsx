import React from "react";
import Helmet from "../../components/helmet/Helmet";
import Button from "../../components/button/Button";
import Section, { SectionTitle } from "../../components/section/Section";
import "./notFound.scss";
const notFound = () => {
  return (
    <Helmet title="Accessories">
      <div className="container">
        <Section>
          <SectionTitle>---------</SectionTitle>
          <SectionTitle className="title__404">Ooops... Error 404</SectionTitle>
          <SectionTitle>
            Sorry, but the page you are looking for doesn't exist
          </SectionTitle>
          <a href="/">Back to home</a>
        </Section>
      </div>
    </Helmet>
  );
};

export default notFound;
