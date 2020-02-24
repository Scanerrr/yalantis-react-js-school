import React from "react";
import { useSelector } from "react-redux";

import ProductForm from "../Forms/ProductForm";
import { useRunSaga } from "../../hooks/useSaga";
import handleUpdateProductSaga from "../../store/products/saga/insertProductSaga";
import { selectProductEditEntity } from "../../store/products/selectors";
import Error from "../../ui/Error";

const ProductFormWrapper = ({ product }) => {
  const onSubmit = useRunSaga(handleUpdateProductSaga);

  const { error } = useSelector(selectProductEditEntity);

  return (
    <>
      {error && <Error message="Error saving product" description={error} />}
      <ProductForm onSubmit={onSubmit} initialValues={{ product }} />
    </>
  );
};

export default ProductFormWrapper;
