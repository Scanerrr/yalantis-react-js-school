import createApiSaga from "../createApiSaga";

export const fetchProductsListSaga = createApiSaga({
  alias: "FETCH_PRODUCTS_LIST",
  buildReqConfig: searchParams => ({
    url: "/products",
    method: "GET",
    params: searchParams
  })
});

export const fetchProductDetails = createApiSaga({
  alias: "FETCH_PRODUCT_DETAILS",
  buildReqConfig: productId => ({
    url: `/products/${productId}`,
    method: "GET"
  })
});
