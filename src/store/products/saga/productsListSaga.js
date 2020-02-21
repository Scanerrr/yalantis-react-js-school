import {
  call,
  fork,
  getContext,
  put,
  select,
  takeLatest
} from "redux-saga/effects";

import { normalize } from "../../../utils/normalize";
import { getProductsSuccess, updateTotalItems } from "../actions";
import { updateFilter } from "../../filter/actions";
import { selectFilterAsQuery } from "../../filter/selector";
import { parse, stringify } from "query-string";
import { UPDATE_FILTER } from "../../filter/actionTypes";
import { fetchProductsListSaga } from "../../network/services/products";

export default function* productsListSaga() {
  yield takeLatest(UPDATE_FILTER, productsSearchSaga);

  yield fork(initialSearchFromUrlSaga);
}

function* productsSearchSaga() {
  // TODO: filter
  const searchParams = yield select(selectFilterAsQuery);

  const searchInUrl = stringify(searchParams, {
    arrayFormat: "comma"
  });

  const history = yield getContext("history");

  history.push({
    search: searchInUrl
  });

  try {
    const data = yield call(fetchProductsListSaga, searchParams);
    debugger;
    // const productsToSave = normalize(items);

    // yield put(getProductsSuccess(productsToSave));
    // yield put(updateTotalItems(totalItems));
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
