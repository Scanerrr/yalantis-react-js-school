import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Popover, Typography } from "antd";
import CartWidget from "./CartWidget";

const Header = ({ selectedPathName, cartProductsCount, total }) => {
  return (
    <Menu mode="horizontal" selectedKeys={[selectedPathName]}>
      <Menu.Item key="/">
        <Link to="/">
          <Icon type="home" />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="/products">
        <Link to="/products">
          <Icon type="shopping" />
          Products
        </Link>
      </Menu.Item>
      <Menu.Item key="/cart">
        <Popover
          content={<CartWidget total={total} quantity={cartProductsCount} />}
          title="Cart Total"
          trigger="hover"
        >
          <Link to="/cart">
            <Icon type="shopping-cart" />
            Cart{" "}
            {cartProductsCount ? (
              <Typography.Text type="secondary">
                ({cartProductsCount})
              </Typography.Text>
            ) : null}
          </Link>
        </Popover>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
