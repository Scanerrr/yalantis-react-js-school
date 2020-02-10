import React from "react";
import { Col, Row } from "antd";
import Loader from "../ui/Loader";
import useProducts from "../hooks/useProducts";
import ProductsList from "../containers/Products/ProductsList";
import PaginationContainer from "../containers/Products/PaginationContainer";
import ProductsFilter from "../containers/Products/ProductsFilter";
import PerPageFilter from "../containers/Products/Filters/PerPageFilter";

const ProductsPage = props => {
  const { products } = useProducts();

  if (!products.length) {
    return <Loader />;
  }

  return (
    <Row>
      <Col span={6}>
        <ProductsFilter />
      </Col>
      <Col span={18}>
        <h2 style={{ textAlign: "center" }}>Product List</h2>
        <Row style={{ marginBottom: "20px" }} type="flex" justify="end">
          <PerPageFilter />
        </Row>
        <Row gutter={[16, 16]}>
          <ProductsList products={products} />
        </Row>
        <Row>
          <PaginationContainer />
        </Row>
      </Col>
    </Row>
  );
};

export default ProductsPage;
