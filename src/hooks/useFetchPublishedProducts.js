import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsSuccess,
  updateTotalItems
} from "../store/products/actions";
import { selectPublishedProductsList } from "../store/products/selectors";
import { fetchPublishedProducts } from "../api";
import { normalize } from "../utils/normalize";
import { selectFilterAsQuery } from "../store/filter/selector";

const useFetchPublishedProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectPublishedProductsList);
  const query = useSelector(selectFilterAsQuery);

  useEffect(() => {
    fetchPublishedProducts("&" + query)
      .then(({ totalItems, items }) => {
        const productsToSave = normalize(items);
        dispatch(getProductsSuccess(productsToSave));
        dispatch(updateTotalItems(totalItems));
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

export default useFetchPublishedProducts;
