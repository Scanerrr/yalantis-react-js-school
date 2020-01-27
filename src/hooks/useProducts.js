import { useEffect, useState } from "react";

const PRODUCTS_URL = `${process.env.REACT_APP_API_ENDPOINT}/products`;

const useProducts = (init = {}) => {
  const [products, setProducts] = useState(init.products);
  const [loading, setLoading] = useState(init.loading);

  useEffect(() => {
    setLoading(true);
    fetch(PRODUCTS_URL)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return { products, productsLoading: loading };
};

export default useProducts;
