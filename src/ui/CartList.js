import React from "react";
import { List, Icon } from "antd";
import { Link } from "react-router-dom";

const CartList = ({ list, deleteItem }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={list}
      renderItem={({ id, name, price, quantity }) => {
        return (
          <List.Item
            actions={[
              <Icon
                type="delete"
                onClick={() => deleteItem(id)}
                key="list-delete"
              />
            ]}
          >
            <List.Item.Meta
              title={<Link to={`/products/${id}`}>{name}</Link>}
              description={`Quantity: ${quantity}`}
            />

            <div>
              Price: <strong>${price}</strong>
            </div>
          </List.Item>
        );
      }}
    />
  );
};

export default CartList;
