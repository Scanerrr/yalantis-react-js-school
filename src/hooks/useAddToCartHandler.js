import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const useAddToCartHandler = product => {
  const { addProduct } = useContext(CartContext);

  const handleAddToCart = quantity => {
    addProduct({ ...product, quantity });
  };

  return {
    handleAddToCart
  };
};

export default useAddToCartHandler;
