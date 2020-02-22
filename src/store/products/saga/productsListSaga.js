import {
  call,
  fork,
  getContext,
  put,
  select,
  takeLatest
} from "redux-saga/effects";

import {
  getProductsListSuccess,
  getProductsListLoading,
  getProductsListError
} from "../actions";
import { updateFilter } from "../../filter/actions";
import { selectFilter } from "../../filter/selector";
import { parse, stringify } from "query-string";
import { UPDATE_FILTER } from "../../filter/actionTypes";
import { fetchProductsListSaga } from "../../network/services/products";

export default function* productsListSaga() {
  yield takeLatest(UPDATE_FILTER, productsSearchSaga);

  yield fork(initialSearchFromUrlSaga);
}

function* productsSearchSaga() {
  // TODO: filter
  const searchParams = yield select(selectFilter);

  const searchInUrl = stringify(searchParams);

  const history = yield getContext("history");

  history.push({
    search: searchInUrl
  });

  yield put(getProductsListLoading(true));

  try {
    const data = yield call(fetchProductsListSaga, searchParams);

    yield put(getProductsListSuccess(data));
  } catch (error) {
    yield put(getProductsListError(error?.message ?? error));
  } finally {
    yield put(getProductsListLoading(false));
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
