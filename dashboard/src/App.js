import React, { useEffect } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import AddProduct from "./screens/AddProduct";
import Login from "./screens/LoginScreen";
import UsersScreen from "./screens/UsersScreen";
import AddUser from "./screens/AddUser";
import ProductEditScreen from "./screens/ProductEditScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";
import ShipRouter from "./ShipRouter";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./Redux/Actions/ProductActions";
import { listOrders } from "./Redux/Actions/OrderActions";
import HomeShipScreen from "./screens/HomeShipScreen";
import OrderShipScreen from "./screens/OrderShipScreen";
import OrderDetailShipScreen from "./screens/OrderDetailShipScreen";

function App() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
      dispatch(listOrders());
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter path='/' component={HomeScreen} exact />
          <PrivateRouter path='/products' component={ProductScreen} />
          <PrivateRouter path='/category' component={CategoriesScreen} />
          <PrivateRouter path='/orders' component={OrderScreen} />
          <PrivateRouter path='/order/:id' component={OrderDetailScreen} />
          <PrivateRouter path='/addproduct' component={AddProduct} />
          <PrivateRouter path='/users' component={UsersScreen} />
          <PrivateRouter path='/adduser' component={AddUser} />
          <PrivateRouter
            path='/product/:id/edit'
            component={ProductEditScreen}
          />
          <Route path='/login' component={Login} />
          <ShipRouter path='/ship' component={HomeShipScreen} />
          <ShipRouter path='/order' component={OrderShipScreen} />
          <ShipRouter path='/shipping/:id' component={OrderDetailShipScreen} />
          <PrivateRouter path='*' component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
