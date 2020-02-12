import React from "react";
import { Col } from "antd";
import ProductCardWrapper from "./ProductCardWrapper";

const ProductsList = ({ products }) => {
  return products.map((product, idx) => (
    <Col span={6} key={product.id + idx}>
      <ProductCardWrapper product={product} />
    </Col>
  ));
};

export default ProductsList;
