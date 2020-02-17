import React from "react";
import ProductCard from "../../ui/Products/SingleProducts/ProductCard";
import PublishProductCard from "../../ui/Products/SingleProducts/PublishProductCard";

const ProductCardWrapper = ({ product }) => {
  return product.isEditable ? (
    <PublishProductCard product={product} />
  ) : (
    <ProductCard product={product} />
  );
};

export default ProductCardWrapper;
