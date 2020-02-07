import React from "react";
import { Col } from "antd";
import ProductCard from "../../ui/Products/SingleProducts/ProductCard";

const ProductsList = ({ products }) => {
  return products.map((product, idx) => (
    <Col span={6} key={product.id + idx}>
      <ProductCard product={product} />
    </Col>
  ));
};

export default ProductsList;
