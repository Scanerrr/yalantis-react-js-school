import React from "react";
import ModalWrapper from "../../ui/Products/ModalWrapper";
import ProductFormContainer from "./ProductFormContainer";
import { connect } from "react-redux";
import { selectProductToEdit } from "../../store/products/selectors";

const ProductModal = ({ visible, onCancel, productToEdit }) => {
  const title = productToEdit ? "Edit product" : "Publish Product";
  return (
    <ModalWrapper title={title} visible={visible} onCancel={onCancel}>
      <ProductFormContainer product={productToEdit} />
    </ModalWrapper>
  );
};

const mapStateToProps = state => ({
  productToEdit: selectProductToEdit(state)
});

const enhancer = connect(mapStateToProps);

export default enhancer(ProductModal);
