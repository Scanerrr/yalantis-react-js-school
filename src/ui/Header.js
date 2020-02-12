import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Menu, Icon, Popover, Typography } from "antd";
import CartWidget from "./Cart/CartWidget";

const Header = ({ selectedPathName, cartProductsCount, total, showModal }) => {
  return (
    <Row type="flex" justify="space-between" align="middle">
      <Col>
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
              Catalogue
            </Link>
          </Menu.Item>
          <Menu.Item key="/my-products">
            <Link to="/my-products">
              <Icon type="container" />
              My products
            </Link>
          </Menu.Item>
          <Menu.Item key="/cart">
            <Popover
              content={
                <CartWidget total={total} quantity={cartProductsCount} />
              }
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
      </Col>
      <Col span={4}>
        <Button type="primary" onClick={showModal}>
          <Icon type="plus" />
          Create product
        </Button>
      </Col>
    </Row>
  );
};

export default Header;
