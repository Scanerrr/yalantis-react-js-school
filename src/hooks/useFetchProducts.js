import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsSuccess } from "../store/products/actions";
import { selectProductsList } from "../store/products/selectors";
import { updateFilter } from "../store/filter/actions";
import { fetchProducts } from "../api";
import { normalize } from "../utils/normalize";
import { selectFilterAsQuery } from "../store/filter/selector";

const useFetchProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsList);
  const query = useSelector(selectFilterAsQuery);

  useEffect(() => {
    fetchProducts("?" + query)
      .then(({ totalItems, items }) => {
        const productsToSave = normalize(items);
        dispatch(getProductsSuccess(productsToSave));
        dispatch(updateFilter({ totalItems }));
      })
      .catch(error => {
        console.error("Couldn't fetch products");
        console.error(error);
      });
  }, [dispatch, query]);

  return useMemo(
    () => ({
      products
    }),
    [products]
  );
};

export default useFetchProducts;
