import { createSelector } from "reselect";

export const selectFilter = state => state.filter;

export const selectFilterAsQuery = createSelector(selectFilter, filter =>
  Object.keys(filter)
    .map(filterName => `${filterName}=${filter[filterName] || ""}`)
    .join("&")
);

export const selectFilterPage = createSelector(
  selectFilter,
  ({ page }) => page
);
