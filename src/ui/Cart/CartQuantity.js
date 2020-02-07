import React from "react";
import { InputNumber } from "antd";

const CartQuantity = ({ productId, quantity, onChange }) => {
  const handleChange = value => {
    onChange(productId, value);
  };
  return (
    <>
      Quantity:
      <InputNumber onChange={handleChange} value={quantity} min={1} max={100} />
    </>
  );
};

export default CartQuantity;
