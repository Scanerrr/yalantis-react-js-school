import { GET_PRODUCTS_SUCCESS, PUBLISH_PRODUCT } from "./actionTypes";

export function getProductsSuccess(data) {
  return { type: GET_PRODUCTS_SUCCESS, ...data };
}

export function publishProduct(data) {
  return { type: PUBLISH_PRODUCT, ...data };
}
