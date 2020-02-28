import createApiSaga from "../createApiSaga";

export const fetchOriginsSaga = createApiSaga({
  alias: "FETCH_PRODUCT_ORIGIGNS",
  buildReqConfig: () => ({
    url: "/products-origins",
    method: "GET"
  })
});
