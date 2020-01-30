import React from "react";
import { Col } from "antd";
import ProductCard from "../ui/ProductCard";

const ProductsList = ({ products }) => {
  return products.map(product => (
    <Col span={4} key={product.id}>
      <ProductCard product={product} />
    </Col>
  ));
};

export default ProductsList;
