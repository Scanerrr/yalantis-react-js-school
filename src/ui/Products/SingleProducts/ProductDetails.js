import React from "react";
import { Descriptions } from "antd";

const timeFormatter = date =>
  Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }).format(new Date(date));

const ProductDetails = ({
  name,
  price,
  origin,
  createdAt,
  updatedAt,
  isEditable
}) => {
  return (
    <Descriptions bordered column={1} title={name}>
      <Descriptions.Item label="Price">${price}</Descriptions.Item>
      <Descriptions.Item label="Created">
        {timeFormatter(createdAt)}
      </Descriptions.Item>
      <Descriptions.Item label="Updated">
        {timeFormatter(updatedAt)}
      </Descriptions.Item>
      <Descriptions.Item label="Origin">{origin}</Descriptions.Item>
      <Descriptions.Item label="Editable">
        {isEditable ? "Yes" : "No"}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default ProductDetails;
