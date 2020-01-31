import React, { useContext } from "react";
import { Col } from "antd";
import CartList from "../ui/CartList";
import CartSummary from "../ui/CartSummary";
import { CartContext } from "../context/CartProvider";

const CartPage = props => {
  const { cartProducts, deleteProduct, cartProductsCount, total } = useContext(
    CartContext
  );

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Cart</h1>
      <Col span={12} offset={6}>
        <CartList list={cartProducts} deleteItem={deleteProduct} />
        {cartProductsCount ? (
          <CartSummary total={total} count={cartProductsCount} />
        ) : null}
      </Col>
    </>
  );
};

export default CartPage;
