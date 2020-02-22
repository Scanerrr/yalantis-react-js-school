import React from "react";
import { connect } from "react-redux";
import { Button, Icon } from "antd";
import Card from "../../Card";
import { setProductEditMode } from "../../../store/products/actions";
import { toggleModal as toggle } from "../../../store/modal/actions";

const PublishProductCard = ({ product, toggleModal, setEditMode }) => {
  const { id, name, price } = product;

  const toggleEditMode = () => {
    toggleModal();
    setEditMode(id);
  };

  return (
    <Card size="small" title={name}>
      <p>
        Price: <strong>${price}</strong>
      </p>
      <Button type="primary" ghost onClick={toggleEditMode}>
        <Icon type="edit" />
        Edit
      </Button>
    </Card>
  );
};

const mapDispatchToProps = {
  toggleModal: toggle,
  setEditMode: setProductEditMode
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(PublishProductCard);
