import {
  call,
  fork,
  getContext,
  put,
  select,
  takeLatest
} from "redux-saga/effects";

import { fetchProducts } from "../../../api";
import { normalize } from "../../../utils/normalize";
import { getProductsSuccess, updateTotalItems } from "../actions";
import { updateFilter } from "../../filter/actions";
import { selectFilterAsQuery } from "../../filter/selector";
import { parse } from "query-string";
import { UPDATE_FILTER } from "../../filter/actionTypes";

export default function* productsListSaga() {
  yield takeLatest(UPDATE_FILTER, fetchProductsSaga);

  yield fork(initialSearchFromUrlSaga);
}

function* fetchProductsSaga() {
  const searchParams = yield select(selectFilterAsQuery);

  const history = yield getContext("history");

  history.push({
    search: "?" + searchParams
  });

  try {
    const { items, totalItems } = yield call(fetchProducts, "?" + searchParams);

    const productsToSave = normalize(items);

    yield put(getProductsSuccess(productsToSave));
    yield put(updateTotalItems(totalItems));
  } catch (err) {
    console.error(err);
  }
}

function* initialSearchFromUrlSaga() {
  const history = yield getContext("history");

  const searchParams = parse(history.location.search, {
    parseNumbers: true,
    parseBooleans: true
  });

  yield put(updateFilter(searchParams));
}
