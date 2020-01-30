import React from "react";
import { Button, Form, InputNumber } from "antd";

function AddToCartFormImpl({ form, transitProductQuantity, productId }) {
  const { getFieldDecorator, getFieldValue } = form;
  const handleSubmit = e => {
    e.preventDefault();
    const quantity = getFieldValue(`quantity-${productId}`);

    quantity > 0 && transitProductQuantity(quantity);
  };
  return (
    <Form layout="inline" onSubmit={handleSubmit}>
      <Form.Item label="Quantity">
        {getFieldDecorator(`quantity-${productId}`, { initialValue: 1 })(
          <InputNumber ref min={1} max={100} />
        )}
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          Buy
        </Button>
      </Form.Item>
    </Form>
  );
}

const AddToCartForm = Form.create()(AddToCartFormImpl);

export default AddToCartForm;
