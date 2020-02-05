import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsSuccess } from "../store/products/actions";
import { selectProductsList } from "../store/products/selectors";
import { getProducts } from "../api";
import { normalize } from "../utils/normalize";

const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsList);

  useEffect(() => {
    if (!products.length) {
      getProducts()
        .then(({ items }) => {
          const productsToSave = normalize(items);
          dispatch(getProductsSuccess(productsToSave));
        })
        .catch(error => {
          console.error("Couldn't fetch products");
        });
    }
  }, [dispatch, products.length]);

  return useMemo(
    () => ({
      products
    }),
    [products]
  );
};

export default useProducts;
