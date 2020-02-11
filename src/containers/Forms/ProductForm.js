import React from "react";
import { Field, FormSection, reduxForm } from "redux-form";
import { Button, Col, Form, Select as ASelect, Row } from "antd";
import { formValidators } from "./productFormValidators";
import Input from "../../ui/Form/Input";
import InputNumber from "../../ui/Form/InputNumber";
import Select from "../../ui/Form/Select";

const { Option } = ASelect;

const ProductForm = props => {
  return (
    <Form onSubmit={() => {}}>
      <FormSection name="product">
        <Field
          label="Title"
          name="name"
          component={Input}
          placeholder="Iphone Z"
        />
        <Row type="flex" justify="space-between">
          <Col span="4">
            <Field
              label="Price"
              name="price"
              component={InputNumber}
              placeholder="999"
              // min={0}
            />
          </Col>
          <Col span={16}>
            <Field label="Origin" name="origin" component={Select}>
              <Option disabled value="">
                Choose origin
              </Option>
              <Option value="africa">Africa</Option>
              <Option value="asia">Asia</Option>
              <Option value="europe">Europe</Option>
              <Option value="usa">USA</Option>
            </Field>
          </Col>
        </Row>

        <Row type="flex" justify="end">
          <Form.Item>
            <Button htmlType="submit" type="primary" disabled={false}>
              Publish
            </Button>
          </Form.Item>
        </Row>
      </FormSection>
    </Form>
  );
};

export default reduxForm({
  form: "product",
  validate: formValidators
})(ProductForm);
