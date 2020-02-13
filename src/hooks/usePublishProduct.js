import { useCallback, useMemo } from "react";
import { reset } from "redux-form";
import { useDispatch } from "react-redux";
import { message } from "antd";

import { insertProduct } from "../api";
import { publishProduct } from "../store/products/actions";

const usePublishProduct = () => {
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    ({ product }) =>
      insertProduct(product)
        .then(res => res.json())
        .then(data => {
          if (data.error && data.error.message) {
            message.error(data.error.message);
          } else {
            dispatch(publishProduct(data));
            dispatch(reset("product"));
            message.success("Product was successfully published");
          }
        }),
    [dispatch]
  );

  return useMemo(
    () => ({
      onSubmit
    }),
    [onSubmit]
  );
};

export default usePublishProduct;
