import React from "react";
import SidebarShip from "./../components/sidebarShip";
import Header from "./../components/Header";
import OrderShipMain from "./../components/orders/OrderShipMain";
const OrderShipScreen = () => {
  return (
    <>
      <SidebarShip />
      <main className="main-wrap">
        <Header />
        <OrderShipMain />
      </main>
    </>
  );
};

export default OrderShipScreen;
