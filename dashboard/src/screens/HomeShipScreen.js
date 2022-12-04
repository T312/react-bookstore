import React from "react";
import Header from "./../components/Header";
import OrderShipMain from "../components/orders/OrderShipMain";
import SidebarShip from "./../components/sidebarShip";
import bg from "../assets/images/bg.png";
const HomeShipScreen = () => {
  return (
    <>
      <SidebarShip />
      <main className='main-wrap'>
        <Header />
        {/* <OrderShipMain /> */}
        <div>
          <img
            src={bg}
            alt=''
            style={{
              maxWidth: "80%",
              height: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          />
        </div>
      </main>
    </>
  );
};

export default HomeShipScreen;
