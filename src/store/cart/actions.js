import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  CLEAR_CART
} from "./actionTypes";

export function addProduct(product, quantity) {
  return {
    type: ADD_PRODUCT,
    product,
    quantity
  };
}

export function updateProduct(id, quantity) {
  return {
    type: UPDATE_PRODUCT,
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
