import React from "react";

import { Route, Routes } from "react-router-dom";
// ---------------------------
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import Catalog from "../pages/catalog/Catalog";
import Cart from "../pages/cart/Cart";
import About from "../pages/about/About";
import Accessory from "../pages/accessory/Accessory";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";

const Navigation = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/product/:id" exact element={<Product />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/accessories" element={<Accessory />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
