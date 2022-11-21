import React from "react";
import AddressCard from "../../components/address-card/AddressCard";
import CheckoutStatus from "../../components/checkout-status/CheckoutStatus";
import Grid from "../../components/grid/Grid";
import Section, {
  SectionTitle,
  SectionBody,
} from "../../components/section/Section";
import "./shipping.scss";

const Shipping = () => {
  return (
    <div className='container'>
      <Section>
        <SectionTitle>---</SectionTitle>
        <SectionTitle>Thủ tục thanh toán</SectionTitle>
        <SectionBody>
          <CheckoutStatus />
        </SectionBody>
      </Section>

      <div className='shipping'>
        <AddressCard />
      </div>
    </div>
  );
};

export default Shipping;
