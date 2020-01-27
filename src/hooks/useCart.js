import { useState, useEffect, useCallback } from "react";

const useCart = initial => {
  const [products, setProducts] = useState(initial.products);
  const [total, setTotal] = useState(0);

  const addProduct = useCallback(
    product => {
      // item already was in cart
      const { quantity } = products.find(({ id }) => id === product.id);

      const productToAdd = {
        ...product,
        quantity: (quantity || 0) + product.quantity
      };

      setProducts({ ...products, productToAdd });
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
      products.reduce((totals, { price, quantity }) => price * quantity, 0)
    );
  }, [products]);

  return {
    cartProducts: products,
    addProduct,
    deleteProduct,
    total
  };
};

export default useCart;
