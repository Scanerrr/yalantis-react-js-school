import React from "react";
import { Modal } from "antd";

const ModalWrapper = ({ visible, title, onCancel, children }) => {
  return (
    <Modal title={title} visible={visible} footer={null} onCancel={onCancel}>
      {children}
    </Modal>
  );
};

export default ModalWrapper;
