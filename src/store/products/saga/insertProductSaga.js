import { call, put, select } from "redux-saga/effects";
import { reset } from "redux-form";

import {
  updateProductLoading,
  updateProductError,
  insertProductSuccess,
  setProductEdit,
  updateProductSuccess
} from "../actions";
import {
  insertProductSaga,
  updateProductSaga
} from "../../network/services/products";
import { selectProductToEdit } from "../selectors";

export default function* handleUpdateProductSaga(dataValues) {
  yield put(updateProductLoading(true));

  try {
    const edit = yield select(selectProductToEdit);
    if (edit) {
      const product = yield call(insertProductSaga, dataValues);
      yield put(updateProductSuccess(product));
    } else {
      const product = yield call(insertProductSaga, dataValues);
      yield put(insertProductSuccess(product));
      yield put(reset("product"));
      yield put(setProductEdit(null));
    }
  } catch (error) {
    let message = error?.message ?? error;
    if (error.response) {
      message = error.response?.data?.error?.message ?? message;
    }
    if (message.includes("Duplicate key value")) {
      message = "Product name taken";
    }

    yield put(updateProductError(message));
  } finally {
    yield put(updateProductLoading(false));
  }
}
