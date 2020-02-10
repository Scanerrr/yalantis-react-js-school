import React from "react";
import { connect } from "react-redux";
import { Col, Button } from "antd";
import CartList from "../ui/Cart/CartList";
import CartSummary from "../ui/Cart/CartSummary";
import {
  selectCartProducts,
  selectCartProductsCount,
  selectCartTotal
} from "../store/cart/selectors";
import { updateProduct, deleteProduct, clearCart } from "../store/cart/actions";

const CartPage = ({
  list,
  count,
  total,
  clearCart,
  deleteProduct,
  updateProduct
}) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Cart</h1>
      {count ? (
        <Col span={12} offset={17}>
          <Button type="danger" ghost onClick={clearCart}>
            Clear all
          </Button>
        </Col>
      ) : null}
      <Col span={12} offset={6}>
        <CartList
          list={list}
          deleteItem={deleteProduct}
          updateItem={updateProduct}
        />
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
  clearCart,
  deleteProduct,
  updateProduct: updateProduct
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(CartPage);
