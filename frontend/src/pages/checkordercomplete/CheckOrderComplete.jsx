import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// @mui
import { Divider, Typography, Stack } from "@mui/material";
// components
// import Iconify from '../../../../components/iconify';
// import { DialogAnimate } from '../../../../components/animate';
// assets
// import { OrderCompleteIllustration } from '../../../../assets/illustrations';
import Section, {
  SectionTitle,
  SectionBody,
} from "../../components/section/Section";
import Helmet from "../../components/helmet/Helmet";
import Button from "../../components/button/Button";
import CheckoutStatus3 from "../../components/checkout-status/CheckoutStatus3";
import checkcomplete from "../../assets/images/check-complete.png";
import { useSelector } from "react-redux";
// ----------------------------------------------------------------------

CheckoutOrderComplete.propTypes = {
  open: PropTypes.bool,
  onReset: PropTypes.func,
  onDownloadPDF: PropTypes.func,
};

export default function CheckoutOrderComplete({
  open,
  onReset,
  onDownloadPDF,
}) {
  return (
    <Helmet title="Order Complete">
      <div className="container">
        <Section>
          <SectionTitle>--</SectionTitle>
          <SectionTitle>Thanh toán hoàn Tất!</SectionTitle>
          <CheckoutStatus3 />
          <SectionBody>
            <Stack
              spacing={3}
              sx={{
                m: "auto",
                maxWidth: 480,
                textAlign: "center",
                px: { xs: 2, sm: 0 },
              }}
            >
              <img
                src={checkcomplete}
                alt=""
                style={{ height: "200px", width: "200px", marginLeft: "150px" }}
              />
              <Typography>
                Thanks for placing order
                <br />
                <br />
                <Link>01dc1370-3df6-11eb-b378-0242ac130002</Link>
                <br />
                <br />
                We will send you a notification within 5 days when it ships.
                <br /> If you have any question or queries then fell to get in
                contact us. <br /> <br />
                All the best,
              </Typography>

              <Divider sx={{ borderStyle: "dashed" }} />

              <Stack
                spacing={2}
                justifyContent="space-between"
                direction={{ xs: "column-reverse", sm: "row" }}
              >
                <Link to="/">
                  <Button
                    fullWidth
                    size="md"
                    color="inherit"
                    variant="outlined"
                    onClick={onReset}
                  >
                    Continue Shopping
                  </Button>
                </Link>

                <Button
                  fullWidth
                  size="md"
                  variant="contained"
                  onClick={onDownloadPDF}
                >
                  Download as PDF
                </Button>
              </Stack>
            </Stack>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
}
