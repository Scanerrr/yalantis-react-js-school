import React from "react";
import usePublishProduct from "../../hooks/usePublishProduct";
import ProductForm from "../Forms/ProductForm";

const ProductFormWrapper = props => {
  const { onSubmit } = usePublishProduct();
  return <ProductForm onSubmit={onSubmit} />;
};

export default ProductFormWrapper;
