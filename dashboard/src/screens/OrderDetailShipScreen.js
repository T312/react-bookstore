import React from "react";
import SidebarShip from "./../components/sidebarShip";
import Header from "./../components/Header";
import OrderDetailShipMain from "../components/orders/OrderDetailShipMain";

const OrderDetailShipScreen = ({ match }) => {
  const orderId = match.params.id;

  return (
    <>
      <SidebarShip />
      <main className="main-wrap">
        <Header />
        <OrderDetailShipMain orderId={orderId} />
      </main>
    </>
  );
};

export default OrderDetailShipScreen;
