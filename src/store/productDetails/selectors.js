import { createSelector } from "reselect";

export const selectProductDetailsPage = state => state.productDetails;

export const selectProductDetails = createSelector(
  selectProductDetailsPage,
  ({ product }) => product
);
