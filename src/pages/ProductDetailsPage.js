import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Empty } from "antd";

import Error from "../ui/Error";
import useAddToCartHandler from "../hooks/useAddToCartHandler";
import ProductDetails from "../ui/Products/ProductDetails";
import AddToCartForm from "../containers/Forms/AddToCartForm";
import { useInjectSaga } from "../hooks/useSaga";
import productDetailsSaga from "../store/productDetails/saga/productDetailsSaga";
import { selectProductDetailsPage } from "../store/productDetails/selectors";
import Loader from "../ui/Loader";

const ProductDetailsPage = props => {
  const { id } = useParams();

  useInjectSaga("productDetails", productDetailsSaga, id);

  const { product, loading, error } = useSelector(selectProductDetailsPage);

  const { handleAddToCart } = useAddToCartHandler(product);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error message="Fetch product details error" description={error} />;
  }

  if (!product) {
    return <Empty />;
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

export default ProductDetailsPage;
