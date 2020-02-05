import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import useAddToCartHandler from "../hooks/useAddToCartHandler";
import AddToCartForm from "../components/AddToCartForm";

const ProductCard = ({ product }) => {
  const { id, name, price } = product;
  const { handleAddToCart } = useAddToCartHandler(id);
  return (
    <Card
      size="small"
      title={name}
      extra={<Link to={`/products/${id}`}>More</Link>}
    >
      <p>
        Price: <strong>${price}</strong>
      </p>
      <AddToCartForm productId={id} transitProductQuantity={handleAddToCart} />
    </Card>
  );
};

export default ProductCard;
