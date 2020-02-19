import React from "react";
import { Switch, Route } from "react-router-dom";

// pages
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import MyProductsPage from "../pages/MyProductsPage";
import SingleProductPage from "../pages/SingleProductPage";
import CartPage from "../pages/CartPage";

const RouteContainer = props => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route exact path="/products">
      <ProductsPage />
    </Route>
    <Route exact path="/my-products">
      <MyProductsPage />
    </Route>
    <Route exact path="/products/:id">
      <SingleProductPage />
    </Route>
    <Route exact path="/cart">
      <CartPage />
    </Route>
  </Switch>
);

export default RouteContainer;
