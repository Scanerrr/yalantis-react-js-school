import { createSelector } from "reselect";
import { selectProductsEntities } from "../products/selectors";

export const selectCart = state => state.cart;

export const selectCartEntities = createSelector(
  selectCart,
  state => state.byId
);

export const selectCartProductsIds = createSelector(
  selectCart,
  state => state.allIds
);

export const selectCartProductsList = createSelector(
  [selectCartEntities, selectCartProductsIds],
  (products, productsIds) => productsIds.map(id => products[id])
);

export const selectCartProducts = createSelector(
  [selectProductsEntities, selectCartEntities, selectCartProductsIds],
  (products, cartProducts, cartProductsIds = []) =>
    cartProductsIds.map(productId => ({
      ...products[productId],
      quantity: cartProducts[productId].quantity
    }))
);

export const selectCartTotal = createSelector(selectCartProducts, products =>
  products.reduce((total, { price, quantity }) => total + price * quantity, 0)
);

export const selectCartProductsCount = createSelector(
  selectCartProductsList,
  (products = []) =>
    products.reduce((count, { quantity }) => count + quantity, 0)
);
