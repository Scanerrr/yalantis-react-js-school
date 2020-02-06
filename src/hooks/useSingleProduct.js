import { useEffect, useState } from "react";
import { getSingleProduct } from "../api";
const INITIAL_VALUE = { product: null, loading: false };

const useSingleProduct = id => {
  const [product, setProduct] = useState(INITIAL_VALUE.product);
  const [loading, setLoading] = useState(INITIAL_VALUE.loading);

  useEffect(() => {
    setLoading(true);
    getSingleProduct(id)
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
