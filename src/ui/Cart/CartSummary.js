import React from "react";
import { List } from "antd";

const CartSummary = ({ count, total }) => {
  return (
    <List.Item>
      <List.Item.Meta title={`Total Quantity: ${count}`} />
      <div>
        Total Price: <strong>${total}</strong>
      </div>
    </List.Item>
  );
};

export default CartSummary;
