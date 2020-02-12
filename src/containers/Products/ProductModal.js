import React from "react";
import ModalWrapper from "../../ui/Products/ModalWrapper";
import ProductFormContainer from "./ProductFormContainer";

const ProductModal = ({ visible, onCancel }) => {
  return (
    <ModalWrapper title="Publish Product" visible={visible} onCancel={onCancel}>
      <ProductFormContainer />
    </ModalWrapper>
  );
};

export default ProductModal;
