import { useEffect, useState } from "react";

const PRODUCTS_URL = `${process.env.REACT_APP_API_ENDPOINT}/products`;
const INITIAL_PRODUCTS = { products: [], total: 0 };

const useProducts = (initial = INITIAL_PRODUCTS) => {
  const [products, setProducts] = useState(initial.products);
  const [loading, setLoading] = useState(initial.loading);

  useEffect(() => {
    setLoading(true);
    fetch(PRODUCTS_URL)
      .then(res => res.json())
      .then(({ items }) => {
        setProducts(items);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { products, loading };
};

export default useProducts;
