import {
  call,
  delay,
  fork,
  getContext,
  put,
  select,
  takeLatest
} from "redux-saga/effects";
import { parse, stringify } from "query-string";

import {
  productsListSuccess,
  productsListLoading,
  productsListError
} from "../actions";
import { updateFilter } from "../../filter/actions";
import { selectFilter } from "../../filter/selector";
import { UPDATE_FILTER } from "../../filter/actionTypes";
import {
  fetchProductsListSaga,
  fetchMyProductsListSaga
} from "../../network/services/products";

export default function* productsListSaga(editable = false) {
  yield takeLatest(UPDATE_FILTER, productsSearchSaga, editable);

  yield fork(initialSearchFromUrlSaga);
}

function* productsSearchSaga(editable) {
  const searchParams = yield select(selectFilter);

  const searchInUrl = stringify(searchParams);

  const history = yield getContext("history");

  history.push({
    search: searchInUrl
  });

  yield put(productsListLoading(true));

  yield delay(1000);

  try {
    let fetchProducts = fetchProductsListSaga;

    if (editable) {
      fetchProducts = fetchMyProductsListSaga;
    }

    const data = yield call(fetchProducts, searchParams);
    yield put(productsListSuccess(data));
  } catch (error) {
    yield put(productsListError(error?.message ?? error));
  } finally {
    yield put(productsListLoading(false));
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
