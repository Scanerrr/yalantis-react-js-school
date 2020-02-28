import {
  PRODUCTS_LIST_SUCCESS,
  SET_PRODUCT_EDIT,
  PRODUCTS_LIST_LOADING,
  PRODUCTS_LIST_ERROR,
  INSERT_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
  UPDATE_PRODUCT_LOADING
} from "./actionTypes";

export function productsListSuccess(payload) {
  return { type: PRODUCTS_LIST_SUCCESS, payload };
}

export function productsListLoading(payload) {
  return { type: PRODUCTS_LIST_LOADING, payload };
}

export function productsListError(payload) {
  return { type: PRODUCTS_LIST_ERROR, payload };
}

export function insertProductSuccess(payload) {
  return { type: INSERT_PRODUCT_SUCCESS, payload };
}

export function updateProductSuccess(payload) {
  return { type: UPDATE_PRODUCT_SUCCESS, payload };
}

export function updateProductLoading(payload) {
  return { type: UPDATE_PRODUCT_LOADING, payload };
}

export function updateProductError(payload) {
  return { type: UPDATE_PRODUCT_ERROR, payload };
}

export function setProductEdit(payload) {
  return { type: SET_PRODUCT_EDIT, payload };
}
