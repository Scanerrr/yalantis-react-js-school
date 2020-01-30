import { useState, useEffect, useCallback } from "react";

const useCart = initial => {
  const [products, setProducts] = useState(initial.products);
  const [total, setTotal] = useState(initial.total);
  const [productsCount, setProductsCount] = useState(initial.productsCount);
  console.log(productsCount);
  const addProduct = useCallback(
    product => {
      const sameProductInCart = products.find(({ id }) => id === product.id);
      if (!products.length || !sameProductInCart) {
        setProducts(prevProducts => [...prevProducts, { ...product }]);
      } else {
        // item already was in cart
        const productWithNewQuantity = {
          ...sameProductInCart,
          quantity: product.quantity + sameProductInCart.quantity
        };

        const productsWithoutSame = products.filter(
          ({ id }) => id !== product.id
        );

        setProducts([...productsWithoutSame, productWithNewQuantity]);
      }
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
