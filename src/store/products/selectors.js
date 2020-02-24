import { createSelector } from "reselect";

export const selectProducts = state => state.products;

export const selectProductsEntities = createSelector(
  selectProducts,
  state => state.byId
);

export const selectProductsIds = createSelector(
  selectProducts,
  state => state.allIds
);

export const selectProductsList = createSelector(
  [selectProductsEntities, selectProductsIds],
  (products, allIds = []) => allIds.map(id => products[id])
);

export const selectProductsListPage = createSelector(
  [selectProductsList, selectProducts],
  (products, { loading, error }) => ({
    loading,
    error,
    products
  })
);

export const selectProductToEdit = createSelector(
  selectProducts,
  state => state.byId[state.edit.productId]
);

export const selectProductEditEntity = createSelector(
  [selectProducts, selectProductToEdit],
  (state, product) => ({
    product,
    loading: state.edit.loading,
    error: state.edit.error
  })
);

export const selectTotalItems = createSelector(
  selectProducts,
  ({ totalItems }) => totalItems
);
