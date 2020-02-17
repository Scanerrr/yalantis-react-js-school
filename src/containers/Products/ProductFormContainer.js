import React from "react";
import usePublishProduct from "../../hooks/usePublishProduct";
import ProductForm from "../Forms/ProductForm";

const ProductFormWrapper = ({ product }) => {
  const { onSubmit } = usePublishProduct(true);
  return <ProductForm onSubmit={onSubmit} initialValues={{ product }} />;
};

export default ProductFormWrapper;
