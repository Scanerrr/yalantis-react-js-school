import React from "react";
import ProductCard from "../../ui/Products/ProductDetails/ProductCard";
import PublishProductCard from "../../ui/Products/ProductDetails/PublishProductCard";

const ProductCardWrapper = ({ product }) => {
  return product.isEditable ? (
    <PublishProductCard product={product} />
  ) : (
    <ProductCard product={product} />
  );
};

export default ProductCardWrapper;
