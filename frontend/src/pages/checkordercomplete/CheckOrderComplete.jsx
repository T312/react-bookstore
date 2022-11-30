import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Divider, Typography, Stack } from "@mui/material";

import Section, {
  SectionTitle,
  SectionBody,
} from "../../components/section/Section";
import Helmet from "../../components/helmet/Helmet";
import Button from "../../components/button/Button";
import CheckoutStatus3 from "../../components/checkout-status/CheckoutStatus3";
import checkcomplete from "../../assets/images/check-complete.png";
import { useSelector } from "react-redux";
import checkcomplete from "../../assets/images/success.png";
import "./chekout-complete.scss";
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
              <img src={checkcomplete} alt='' className='checkcomplete' />
              <Typography>
                Cảm ơn đã đặt hàng!
                <br />
                <br />
                <Link>01dc1370-3df6-11eb-b378-0242ac130002</Link>
                <br />
                <br />
                Chúng tôi sẽ gửi thông báo cho bạn trong vòng 5 ngày khi hàng
                được giao.
                <br /> Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào thì hãy liên
                hệ với chúng tôi. <br /> <br />
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
                    Tiếp tục mua sắm
                  </Button>
                </Link>

                <Link to='#'>
                  <Button
                    fullWidth
                    size='md'
                    variant='contained'
                    onClick={onDownloadPDF}
                  >
                    Download PDF
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
}
