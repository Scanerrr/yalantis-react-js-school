import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Card";
import useAddToCartHandler from "../../../hooks/useAddToCartHandler";
import AddToCartForm from "../../../containers/Forms/AddToCartForm";

const ProductCard = ({ product }) => {
  const { id, name, price } = product;
  const { handleAddToCart } = useAddToCartHandler(product);
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
