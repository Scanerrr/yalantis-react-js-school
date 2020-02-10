import React from "react";
import ProductFormModal from "../ui/Products/ProductFormModal";

const AddProductModal = ({ visible, onCancel }) => {
  return (
    <ProductFormModal
      title="Basic Modal"
      visible={visible}
      onOk={() => {}}
      onCancel={onCancel}
    />
  );
};

export default AddProductModal;
