import React from "react";
import Card from "../../Card";

const PublishProductCard = ({ product }) => {
  const { id, name, price } = product;

  return (
    <Card size="small" title={name}>
      <p>
        Price: <strong>${price}</strong>
      </p>
    </Card>
  );
};

export default PublishProductCard;
