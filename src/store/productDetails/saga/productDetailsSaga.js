import { call, put } from "redux-saga/effects";

import { fetchProductDetailsSaga } from "../../network/services/products";
import {
  getProductDetailsLoading,
  getProductDetailsSuccess,
  getProductDetailsError
} from "../actions";

export default function* productDetailsSaga(productId) {
  yield put(getProductDetailsLoading(true));

  try {
    const data = yield call(fetchProductDetailsSaga, productId);

    yield put(getProductDetailsSuccess(data));
  } catch (error) {
    yield put(getProductDetailsError(error?.message ?? error));
  } finally {
    yield put(getProductDetailsLoading(false));
  }
}
