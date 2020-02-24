import { call, put } from "redux-saga/effects";
import { apiCallStart, apiCallFailure, apiCallSuccess } from "./actions";
import httpClient from "./httpClient";

const createApiSaga = ({ buildReqConfig, addApiKey = false, alias }) =>
  function* apiSaga(params) {
    const reqConfig = buildReqConfig(params);

    yield put(
      apiCallStart({
        req: reqConfig,
        alias
      })
    );

    if (addApiKey) {
      if (!reqConfig?.headers?.common) {
        reqConfig.headers = { common: {} };
      }
      reqConfig.headers.common["Authorization"] =
        process.env.REACT_APP_API_TOKEN;
    }

    try {
      const response = yield call(httpClient.request, reqConfig);

      yield put(
        apiCallSuccess({
          req: reqConfig,
          res: response,
          alias
        })
      );

      return response.data;
    } catch (error) {
      yield put(
        apiCallFailure({
          req: reqConfig,
          res: error,
          alias
        })
      );
      throw error;
    }
  };

export default createApiSaga;
