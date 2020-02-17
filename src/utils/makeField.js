import React from "react";
import { Form } from "antd";

export const makeField = Component => ({
  input,
  meta,
  children,
  label,
  ...restProps
}) => {
  const hasError = meta.touched && meta.invalid;

  return (
    <Form.Item
      label={label}
      validateStatus={hasError ? "error" : ""}
      hasFeedback={hasError}
      help={hasError ? meta.error : null}
    >
      <Component {...input} {...restProps} children={children} />
    </Form.Item>
  );
};
