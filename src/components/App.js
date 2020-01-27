import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductsProvider from "../context/ProductsProvider";
import Header from "../ui/Header";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

function App() {
  return (
    <ProductsProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/products">
            <ProductsPage />
          </Route>
        </Switch>
      </Router>
    </ProductsProvider>
  );
}

export default App;
