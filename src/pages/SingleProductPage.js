import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../ui/Loader";
import useSingleProduct from "../hooks/useSingleProduct";
import useAddToCartHandler from "../hooks/useAddToCartHandler";
import ProductDetails from "../ui/ProductDetails";
import AddToCartForm from "../components/AddToCartForm";

const SingleProductPage = props => {
  const { id } = useParams();
  const { product, loading } = useSingleProduct(id);
  const { handleAddToCart } = useAddToCartHandler(id);

  if (!product || loading) {
    return <Loader />;
  }

  return (
    <>
      <ProductDetails {...product} />
      <AddToCartForm
        productId={product.id}
        transitProductQuantity={handleAddToCart}
      />
    </>
  );
};

export default SingleProductPage;
