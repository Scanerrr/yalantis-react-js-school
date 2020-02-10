import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleProduct } from "../store/singleProduct/selectors";
import { getSingleProduct } from "../store/singleProduct/actions";
import { fetchSingleProduct } from "../api";

const useSingleProduct = id => {
  const dispatch = useDispatch();
  const product = useSelector(selectSingleProduct);

  useEffect(() => {
    if (!product) {
      fetchSingleProduct(id)
        .then(data => {
          dispatch(getSingleProduct(data));
        })
        .catch(error => {
          console.error("Couldn't fetch single product");
          console.error(error);
        });
    }
  }, [dispatch, id, product]);

  return useMemo(
    () => ({
      product
    }),
    [product]
  );
};

export default useSingleProduct;
