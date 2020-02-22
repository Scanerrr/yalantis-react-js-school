import {
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_LOADING,
  GET_PRODUCT_DETAILS_ERROR
} from "./actionTypes";

export function getProductDetailsSuccess(payload) {
  return { type: GET_PRODUCT_DETAILS_SUCCESS, payload };
}

export function getProductDetailsLoading(payload) {
  return { type: GET_PRODUCT_DETAILS_LOADING, payload };
}

export function getProductDetailsError(payload) {
  return { type: GET_PRODUCT_DETAILS_ERROR, payload };
}
