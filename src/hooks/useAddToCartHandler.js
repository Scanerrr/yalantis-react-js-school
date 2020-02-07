import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/cart/actions";

const useAddToCartHandler = product => {
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(
    quantity => {
      if (product) {
        dispatch(addProduct(product, quantity));
      }
    },
    [dispatch, product]
  );

  return {
    handleAddToCart
  };
};

export default useAddToCartHandler;
