import { useCallback, useMemo } from "react";
import { reset } from "redux-form";
import { useDispatch } from "react-redux";
import { message } from "antd";

import { insertProduct } from "../api";
import {
  publishProduct,
  updateProduct,
  setProductEditMode
} from "../store/products/actions";

const usePublishProduct = (edit = false) => {
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    ({ product }) =>
      insertProduct(product)
        .then(res => res.json())
        .then(data => {
          if (data.error && data.error.message) {
            message.error(data.error.message);
          } else {
            message.success(
              `Product was successfully ${edit ? "editted" : "published"}`
            );
            // TODO: refactor
            if (edit) {
              dispatch(updateProduct(data));
              dispatch(setProductEditMode(null));
            } else {
              dispatch(publishProduct(data));
            }
            dispatch(reset("product"));
          }
        }),
    [dispatch, edit]
  );

  return useMemo(
    () => ({
      onSubmit
    }),
    [onSubmit]
  );
};

export default usePublishProduct;
