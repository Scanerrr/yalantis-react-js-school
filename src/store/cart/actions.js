import { ADD_PRODUCT, DELETE_PRODUCT, CLEAR_CART } from "./actionTypes";

export function addProduct(id, quantity) {
  return {
    type: ADD_PRODUCT,
    id,
    quantity
  };
}

export function deleteProduct(id) {
  return {
    type: DELETE_PRODUCT,
    id
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART
  };
}
