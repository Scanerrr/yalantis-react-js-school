import React from "react";
import { Alert } from "antd";

const Error = ({ message, description }) => (
  <Alert showIcon type="error" message={message} description={description} />
);

export default Error;
