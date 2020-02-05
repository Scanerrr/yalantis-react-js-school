import React from "react";
import Loader from "../ui/Loader";
import useProducts from "../hooks/useProducts";
import ProductsList from "../components/ProductsList";

const ProductsPage = props => {
  const { products } = useProducts();

  if (!products.length) {
    return <Loader />;
  }

  return <ProductsList products={products} />;
};

export default ProductsPage;
