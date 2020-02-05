import React from "react";
import { connect } from "react-redux";
import { useLocation, useRouteMatch } from "react-router-dom";
import {
  selectCartProductsCount,
  selectCartTotal
} from "../store/cart/selectors";
import Header from "../ui/Header";

const HeaderContainer = ({ cartProductsCount, total }) => {
  const { pathname } = useLocation();
  const matchCart = useRouteMatch("/cart");

  if (!!matchCart) return null;

  return (
    <Header
      selectedPathName={pathname}
      cartProductsCount={cartProductsCount}
      total={total}
    />
  );
};

const mapStateToProps = state => ({
  cartProductsCount: selectCartProductsCount(state),
  total: selectCartTotal(state)
});

const enhancer = connect(mapStateToProps);

export default enhancer(HeaderContainer);
