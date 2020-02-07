import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsSuccess } from "../store/products/actions";
import { selectProductsList } from "../store/products/selectors";
import { getProducts } from "../api";
import { normalize } from "../utils/normalize";
import { selectFilterAsQuery } from "../store/filter/selector";

const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsList);
  const query = useSelector(selectFilterAsQuery);

  useEffect(() => {
    getProducts("?" + query)
      .then(({ items }) => {
        const productsToSave = normalize(items);
        dispatch(getProductsSuccess(productsToSave));
      })
      .catch(error => {
        console.error("Couldn't fetch products");
      });
  }, [dispatch, query]);

  return useMemo(
    () => ({
      products
    }),
    [products]
  );
};

export default useProducts;
