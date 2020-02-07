import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../ui/Loader";
import useSingleProduct from "../hooks/useSingleProduct";
import useAddToCartHandler from "../hooks/useAddToCartHandler";
import ProductDetails from "../ui/Products/SingleProducts/ProductDetails";
import AddToCartForm from "../containers/AddToCartForm";

const SingleProductPage = props => {
  const { id } = useParams();
  const { product, loading } = useSingleProduct(id);
  const { handleAddToCart } = useAddToCartHandler(product);

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
