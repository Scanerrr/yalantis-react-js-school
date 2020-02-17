import React from "react";
import { connect } from "react-redux";
import { destroy } from "redux-form";
import ModalWrapper from "../../ui/Products/ModalWrapper";
import ProductFormContainer from "./ProductFormContainer";
import { selectProductToEdit } from "../../store/products/selectors";

const ProductModal = ({ visible, onCancel, productToEdit, dispatch }) => {
  const title = productToEdit ? "Edit product" : "Publish Product";

  const handleCancel = () => {
    onCancel();
    dispatch(destroy("product"));
  };

  return (
    <ModalWrapper title={title} visible={visible} onCancel={handleCancel}>
      <ProductFormContainer product={productToEdit} />
    </ModalWrapper>
  );
};

const mapStateToProps = state => ({
  productToEdit: selectProductToEdit(state)
});

const enhancer = connect(mapStateToProps);

export default enhancer(ProductModal);
