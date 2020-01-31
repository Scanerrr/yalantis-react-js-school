import { useEffect, useState } from "react";

const SINGLE_PRODUCT_URL = `${process.env.REACT_APP_API_ENDPOINT}/products`;
const INITIAL_VALUE = { product: null, loading: false };

const useSingleProduct = id => {
  const [product, setProduct] = useState(INITIAL_VALUE.product);
  const [loading, setLoading] = useState(INITIAL_VALUE.loading);

  useEffect(() => {
    setLoading(true);
    fetch(SINGLE_PRODUCT_URL + `/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return { product, loading };
};

export default useSingleProduct;
