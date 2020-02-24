import {
  PRODUCT_ORIGINS_SUCCESS,
  PRODUCT_ORIGINS_LOADING,
  PRODUCT_ORIGINS_ERROR
} from "./actionTypes";

export function productOriginsSuccess(payload) {
  return { type: PRODUCT_ORIGINS_SUCCESS, payload };
}

export function productOriginsLoading(payload) {
  return { type: PRODUCT_ORIGINS_LOADING, payload };
}

export function productOriginsError(payload) {
  return { type: PRODUCT_ORIGINS_ERROR, payload };
}
