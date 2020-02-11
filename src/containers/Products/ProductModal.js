import React from "react";
import ModalWrapper from "../../ui/Products/ModalWrapper";
import ProductForm from "../Forms/ProductForm";

const ProductModal = ({ visible, onCancel }) => {
  return (
    <ModalWrapper title="Publish Product" visible={visible} onCancel={onCancel}>
      <ProductForm />
    </ModalWrapper>
  );
};

export default ProductModal;
