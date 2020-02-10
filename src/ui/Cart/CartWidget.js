import React from "react";

const CartWidget = ({ total, quantity }) => {
  return (
    <>
      <p>
        Quantity: <strong>{quantity}</strong>
      </p>
      <p>
        Total: <strong>${total}</strong>
      </p>
    </>
  );
};

export default CartWidget;
