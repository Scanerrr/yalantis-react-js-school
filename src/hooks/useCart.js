import { useState, useEffect, useCallback } from "react";

const useCart = initial => {
  const [products, setProducts] = useState(initial.products);
  const [total, setTotal] = useState(initial.total);
  const [productsCount, setProductsCount] = useState(initial.productsCount);

  const addProduct = useCallback(
    product => {
      const sameProductInCart = products.find(({ id }) => id === product.id);
      let productsToInsert;

      if (!sameProductInCart) {
        productsToInsert = [...products, product];
      } else {
        productsToInsert = products.map(p => {
          if (p.id === product.id) {
            p.quantity += product.quantity;
          }
          return p;
        });
      }

      setProducts(productsToInsert);
    },
    [products]
  );

  const deleteProduct = useCallback(
    productID => {
      setProducts(products.filter(({ id }) => id !== productID));
    },
    [products]
  );

  useEffect(() => {
    setTotal(
      products.reduce(
        (totals, { price, quantity }) => totals + price * quantity,
        initial.total
      )
    );
  }, [products, initial.total]);

  useEffect(() => {
    setProductsCount(
      products.reduce(
        (count, { quantity }) => count + quantity,
        initial.productsCount
      )
    );
  }, [products, initial.productsCount]);

  return {
    cartProducts: products,
    cartProductsCount: productsCount,
    addProduct,
    deleteProduct,
    total
  };
};

export default useCart;
