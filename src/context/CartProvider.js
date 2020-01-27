import React, { createContext } from "react";
import useCart from "../hooks/useCart";

const INITIAL_CART = { products: [] };
export const CartContext = createContext(INITIAL_CART);

const CartProvider = ({ children }) => {
  const cart = useCart(INITIAL_CART);
  return (
    <CartContext.Provider value={{ ...cart }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
