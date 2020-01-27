import React, { createContext } from "react";
import useProducts from "../hooks/useProducts";

const INITIAL_VALUE = { products: [], loading: false };

export const ProductsContext = createContext(INITIAL_VALUE);

const ProductsProvider = ({ children }) => {
  const { products, productsLoading } = useProducts(INITIAL_VALUE);

  return (
    <ProductsContext.Provider value={{ products, productsLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
