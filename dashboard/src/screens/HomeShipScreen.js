import React from "react";
import Header from "./../components/Header";
import OrderShipMain from "../components/orders/OrderShipMain";
import SidebarShip from "./../components/sidebarShip";
const HomeShipScreen = () => {
  return (
    <>
      <SidebarShip />
      <main className="main-wrap">
        <Header />
        {/* <OrderShipMain /> */}
      </main>
    </>
  );
};

export default HomeShipScreen;
