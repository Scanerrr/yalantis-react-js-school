import React from "react";
import { List, Icon } from "antd";
import { Link } from "react-router-dom";
import CartQuantity from "./CartQuantity";

const CartList = ({ list, deleteItem, updateItem }) => {
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
              description={
                <CartQuantity
                  productId={id}
                  quantity={quantity}
                  onChange={updateItem}
                />
              }
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
