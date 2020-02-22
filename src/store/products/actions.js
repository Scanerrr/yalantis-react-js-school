import {
  GET_PRODUCTS_LIST_SUCCESS,
  PUBLISH_PRODUCT,
  SET_PRODUCT_EDIT_MODE,
  UPDATE_PRODUCT,
  UPDATE_TOTAL_ITEMS,
  GET_PRODUCTS_LIST_LOADING,
  GET_PRODUCTS_LIST_ERROR
} from "./actionTypes";

// TODO: get rid of
export function getProductsSuccess(payload) {
  return { type: GET_PRODUCTS_LIST_SUCCESS, ...payload };
}

export function getProductsListSuccess(payload) {
  return { type: GET_PRODUCTS_LIST_SUCCESS, payload };
}

export function getProductsListLoading(payload) {
  return { type: GET_PRODUCTS_LIST_LOADING, payload };
}

export function getProductsListError(payload) {
  return { type: GET_PRODUCTS_LIST_ERROR, payload };
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

export function updateTotalItems(totalItems) {
  return { type: UPDATE_TOTAL_ITEMS, totalItems };
}
