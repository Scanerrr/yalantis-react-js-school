import {
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_LOADING,
  PRODUCT_DETAILS_ERROR
} from "./actionTypes";

export function productDetailsSuccess(payload) {
  return { type: PRODUCT_DETAILS_SUCCESS, payload };
}

export function productDetailsLoading(payload) {
  return { type: PRODUCT_DETAILS_LOADING, payload };
}

export function productDetailsError(payload) {
  return { type: PRODUCT_DETAILS_ERROR, payload };
}
