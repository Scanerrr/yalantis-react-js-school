import React from "react";
import { connect } from "react-redux";
import { Col } from "antd";
import CartList from "../ui/CartList";
import CartSummary from "../ui/CartSummary";
import {
  selectCartProducts,
  selectCartProductsCount,
  selectCartTotal
} from "../store/cart/selectors";
import { deleteProduct } from "../store/cart/actions";

const CartPage = ({ list, count, total, deleteProduct }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Cart</h1>
      <Col span={12} offset={6}>
        <CartList list={list} deleteItem={deleteProduct} />
        {count ? <CartSummary count={count} total={total} /> : null}
      </Col>
    </>
  );
};

const mapStateToProps = state => ({
  list: selectCartProducts(state),
  count: selectCartProductsCount(state),
  total: selectCartTotal(state)
});

const mapDispatchToProps = {
  deleteProduct
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(CartPage);
