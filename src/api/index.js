const PRODUCTS_URL = `${process.env.REACT_APP_API_ENDPOINT}/products`;
const SINGLE_PRODUCT_URL = `${process.env.REACT_APP_API_ENDPOINT}/products`;

export const PRODUCTS_FILTER = {
  page: "page",
  perPage: "perPage",
  origins: "origins",
  minPrice: "minPrice",
  maxPrice: "maxPrice"
};

export const fetchProducts = (query = "") => {
  return fetch(PRODUCTS_URL + query)
    .then(res => res.json())
    .catch(error => {
      console.error("Fetch of products failed:", error);
    });
};

export const fetchSingleProduct = id =>
  fetch(SINGLE_PRODUCT_URL + `/${id}`)
    .then(res => res.json())
    .catch(error => {
      console.error("Fetch of single products failed:", error);
    });
