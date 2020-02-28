import { createSelector } from "reselect";

export const selectOriginsState = state => state.origins;

export const selectOrigins = createSelector(
  selectOriginsState,
  ({ origins }) => origins
);
