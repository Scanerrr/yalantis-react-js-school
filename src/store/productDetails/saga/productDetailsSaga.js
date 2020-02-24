import { call, put } from "redux-saga/effects";

import { fetchProductDetailsSaga } from "../../network/services/products";
import {
  productDetailsLoading,
  productDetailsSuccess,
  productDetailsError
} from "../actions";

export default function* productDetailsSaga(productId) {
  yield put(productDetailsLoading(true));

  try {
    const data = yield call(fetchProductDetailsSaga, productId);

    yield put(productDetailsSuccess(data));
  } catch (error) {
    yield put(productDetailsError(error?.message ?? error));
  } finally {
    yield put(productDetailsLoading(false));
  }
}
