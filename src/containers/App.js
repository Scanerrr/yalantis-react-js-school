import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row } from "antd";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import MyProductsPage from "../pages/MyProductsPage";
import SingleProductPage from "../pages/SingleProductPage";
import CartPage from "../pages/CartPage";
import HeaderContainer from "./HeaderContainer";

function App() {
  return (
    <>
      <Router>
        <HeaderContainer />
        <div style={{ padding: "30px" }}>
          <Row gutter={[16, 16]}>
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
          </Row>
        </div>
      </Router>
    </>
  );
}

export default App;
