import React from "react";

import { Route, Routes } from "react-router-dom";
// ---------------------------
import Home from "../pages/Home";
import Product from "../pages/Product";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import About from "../pages/About";
import Accessory from "../pages/Accessory";
import Login from "../pages/Login";
import Dashboard from "../pages/dashboard/pages/Dashboard";

const Navigation = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/product/:id' exact element={<Product />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/accessories' element={<Accessory />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
};

export default Navigation;
