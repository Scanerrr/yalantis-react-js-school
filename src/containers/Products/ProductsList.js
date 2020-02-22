import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Col } from "antd";

import ProductCardWrapper from "./ProductCardWrapper";
import useInjectSaga from "../../hooks/useInjectSaga";
import productsListSaga from "../../store/products/saga/productsListSaga";
import { selectProductsListPage } from "../../store/products/selectors";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";

const ProductsList = props => {
  useInjectSaga("productsListSaga", productsListSaga);
  const { products, loading, error } = useSelector(
    selectProductsListPage,
    shallowEqual
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message="Products fetch error" description={error} />;
  }

  return products.map((product, idx) => (
    <Col span={6} key={product.id + idx}>
      <ProductCardWrapper product={product} />
    </Col>
  ));
};

export default ProductsList;
