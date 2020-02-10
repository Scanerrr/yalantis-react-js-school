import React from "react";
import { Modal } from "antd";

const ProductFormModal = ({ visible, onCancel }) => {
  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={onCancel}
      onCancel={onCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default ProductFormModal;
