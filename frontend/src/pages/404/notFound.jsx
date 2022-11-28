import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Helmet from "../../components/helmet/Helmet";
import Button from "../../components/button/Button";
import Section, {
  SectionTitle,
  SectionBody,
} from "../../components/section/Section";
import { Typography, Container, Box } from "@mui/material";
import "./notFound.scss";
import img404 from "../../assets/404/404.jpg";

//-----------------------------------------
const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 600,
  margin: "auto",
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

//-----------------------------------------
const notFound = () => {
  return (
    <Helmet title='Accessories'>
      <div className='container'>
        <Section>
          <SectionTitle>------</SectionTitle>
          <SectionBody>
            <Container>
              <StyledContent sx={{ textAlign: "center", alignItems: "center" }}>
                <Typography variant='h3' paragraph>
                  Sorry, page not found!
                </Typography>

                <Typography sx={{ color: "text.secondary" }}>
                  Sorry, we couldn’t find the page you’re looking for. Perhaps
                  you’ve mistyped the URL? Be sure to check your spelling.
                </Typography>

                <Box
                  component='img'
                  src={img404}
                  sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
                />

                <Link to='/'>
                  <Button size='sm' variant='contained'>
                    Trở về Trang chủ
                  </Button>
                </Link>
              </StyledContent>
            </Container>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

export default notFound;
