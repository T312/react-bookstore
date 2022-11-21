import React from "react";
import AddressCard from "../../components/address-card/AddressCard";
import CheckoutStatus from "../../components/checkout-status/CheckoutStatus";
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
        <SectionTitle>Thanh toán</SectionTitle>
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
