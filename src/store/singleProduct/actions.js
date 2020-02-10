import { GET_SINGLE_PRODUCT } from "./actionTypes";

export function getSingleProduct(data) {
  return { type: GET_SINGLE_PRODUCT, ...data };
}
