import {
  GET_PRODUCTS_SUCCESS,
  PUBLISH_PRODUCT,
  SET_PRODUCT_EDIT_MODE,
  UPDATE_PRODUCT
} from "./actionTypes";

export function getProductsSuccess(data) {
  return { type: GET_PRODUCTS_SUCCESS, ...data };
}

export function publishProduct(data) {
  return { type: PUBLISH_PRODUCT, ...data };
}

export function updateProduct(data) {
  return { type: UPDATE_PRODUCT, ...data };
}

export function setProductEditMode(productId) {
  return { type: SET_PRODUCT_EDIT_MODE, productId };
}
