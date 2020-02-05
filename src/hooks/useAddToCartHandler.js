import { useDispatch } from "react-redux";
import { addProduct } from "../store/cart/actions";

const useAddToCartHandler = productId => {
  const dispatch = useDispatch();

  const handleAddToCart = quantity => {
    dispatch(addProduct(productId, quantity));
  };

  return {
    handleAddToCart
  };
};

export default useAddToCartHandler;
