import { GET_PRODUCTS_SUCCESS } from "./actionTypes";

export function getProductsSuccess(data) {
  return { type: GET_PRODUCTS_SUCCESS, ...data };
}
