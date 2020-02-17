const PRODUCTS_URL = `${process.env.REACT_APP_API_ENDPOINT}/products`;

export const PRODUCTS_FILTER = {
  page: "page",
  perPage: "perPage",
  origins: "origins",
  minPrice: "minPrice",
  maxPrice: "maxPrice"
};

const headers = {
  Authorization: process.env.REACT_APP_API_TOKEN,
  "Content-Type": "application/json"
};

export const fetchProducts = (query = "") =>
  fetch(PRODUCTS_URL + query)
    .then(res => res.json())
    .catch(error => {
      console.error("Fetch of products failed:", error);
    });

export const fetchPublishedProducts = (query = "") =>
  fetch(PRODUCTS_URL + "?editable=true" + query, {
    headers
  })
    .then(res => res.json())
    .catch(error => {
      console.error("Fetch of products failed:", error);
    });

export const fetchSingleProduct = id =>
  fetch(PRODUCTS_URL + `/${id}`)
    .then(res => res.json())
    .catch(error => {
      console.error("Fetch of single products failed:", error);
    });

export const insertProduct = product =>
  fetch(PRODUCTS_URL, {
    method: "post",
    headers,
    body: JSON.stringify({ product })
  });
