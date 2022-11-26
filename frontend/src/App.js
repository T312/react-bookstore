import React from "react";
import "../../frontend/src/assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Navigation from "./config/Navigation";
import ProductViewModal from "./components/productviewmodal/ProductViewModal";
function App() {
  const { isOpen } = useSelector((state) => state.productModal);

  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Footer />
      {isOpen && <ProductViewModal />}
    </BrowserRouter>
  );
}

export default App;
