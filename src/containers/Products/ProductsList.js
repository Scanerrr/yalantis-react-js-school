import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Col, Empty } from "antd";

import { useInjectSaga } from "../../hooks/useSaga";
import productsListSaga from "../../store/products/saga/productsListSaga";
import { selectProductsListPage } from "../../store/products/selectors";
import PublishProductCard from "../../ui/Products/PublishProductCard";
import ProductCard from "../../ui/Products/ProductCard";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";

const ProductsList = ({ editable }) => {
  useInjectSaga(
    editable ? "myProductsListSaga" : "productsListSaga",
    productsListSaga,
    editable
  );
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

  if (!products.length) {
    return <Empty />;
  }

  return products.map((product, idx) => (
    <Col span={6} key={product.id + idx}>
      {product.isEditable ? (
        <PublishProductCard product={product} />
      ) : (
        <ProductCard product={product} />
      )}
    </Col>
  ));
};

export default ProductsList;
