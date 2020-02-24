import createApiSaga from "../createApiSaga";

export const fetchProductsListSaga = createApiSaga({
  alias: "FETCH_PRODUCTS_LIST",
  buildReqConfig: searchParams => ({
    url: "/products",
    method: "GET",
    params: searchParams
  })
});

export const fetchMyProductsListSaga = createApiSaga({
  alias: "FETCH_MY_PRODUCTS_LIST",
  addApiKey: true,
  buildReqConfig: searchParams => ({
    url: "/products",
    method: "GET",
    params: {
      ...searchParams,
      editable: true
    }
  })
});

export const fetchProductDetailsSaga = createApiSaga({
  alias: "FETCH_PRODUCT_DETAILS",
  buildReqConfig: productId => ({
    url: `/products/${productId}`,
    method: "GET"
  })
});

export const insertProductSaga = createApiSaga({
  alias: "INSERT_PRODUCT_SAGA",
  addApiKey: true,
  buildReqConfig: product => ({
    url: "/products",
    method: "POST",
    data: product
  })
});
