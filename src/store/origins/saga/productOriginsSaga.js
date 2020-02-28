import { call, put, select } from "redux-saga/effects";

import {
  productOriginsLoading,
  productOriginsError,
  productOriginsSuccess
} from "../actions";

import { fetchOriginsSaga } from "../../network/services/origins";
import { selectOrigins } from "../selectors";

export default function* productOriginsSaga() {
  const origins = yield select(selectOrigins);
  if (origins.length > 0) {
    return;
  }

  yield put(productOriginsLoading(true));

  try {
    const data = yield call(fetchOriginsSaga);
    yield put(productOriginsSuccess(data.items));
  } catch (error) {
    yield put(productOriginsError(error?.message ?? error));
  } finally {
    yield put(productOriginsLoading(false));
  }
}
