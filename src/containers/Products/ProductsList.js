import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Col } from "antd";

import ProductCardWrapper from "./ProductCardWrapper";
import Loader from "../../ui/Loader";
import useInjectSaga from "../../hooks/useInjectSaga";
import productsListSaga from "../../store/products/saga/productsListSaga";
import { selectProductsList } from "../../store/products/selectors";

const ProductsList = props => {
  useInjectSaga("productsListSaga", productsListSaga);
  const products = useSelector(selectProductsList, shallowEqual);

  if (!products.length) {
    return <Loader />;
  }

  return products.map((product, idx) => (
    <Col span={6} key={product.id + idx}>
      <ProductCardWrapper product={product} />
    </Col>
  ));
};

export default ProductsList;
