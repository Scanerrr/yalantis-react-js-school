import React from "react";
import { connect } from "react-redux";
import { useLocation, useRouteMatch } from "react-router-dom";
import {
  selectCartProductsCount,
  selectCartTotal
} from "../store/cart/selectors";
import Header from "../ui/Header";
import AddProductModal from "./AddProductModal";
import useModal from "../hooks/useModal";

const HeaderContainer = ({ cartProductsCount, total }) => {
  const { pathname } = useLocation();
  const matchCart = useRouteMatch("/cart");
  const { isModalOpen, toggle: toggleModal } = useModal(false);

  if (!!matchCart) return null;

  return (
    <>
      <Header
        selectedPathName={pathname}
        cartProductsCount={cartProductsCount}
        total={total}
        showModal={toggleModal}
      />
      <AddProductModal visible={isModalOpen} onCancel={toggleModal} />
    </>
  );
};

const mapStateToProps = state => ({
  cartProductsCount: selectCartProductsCount(state),
  total: selectCartTotal(state)
});

const enhancer = connect(mapStateToProps);

export default enhancer(HeaderContainer);
