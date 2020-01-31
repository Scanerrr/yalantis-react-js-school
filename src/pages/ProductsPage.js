import React from "react";
import Loader from "../ui/Loader";
import useProducts from "../hooks/useProducts";
import ProductsList from "../components/ProductsList";

const ProductsPage = props => {
  const { products, loading } = useProducts();

  if (!products.length || loading) {
    return <Loader />;
  }

  return <ProductsList products={products} />;
};

export default ProductsPage;
