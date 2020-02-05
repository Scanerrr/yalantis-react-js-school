import { ADD_PRODUCT, DELETE_PRODUCT, CLEAR_CART } from "./actionTypes";

export const INITIAL_STATE = {
  byId: {},
  allIds: []
};

function addProduct(state, action) {
  const isProductInCart = !!state.allIds.find(id => id === action.id);
  const updatedProductQuantity = isProductInCart
    ? state.byId[action.id].quantity + action.quantity
    : action.quantity;
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.id]: { quantity: updatedProductQuantity }
    },
    allIds: [...state.allIds, isProductInCart ? null : action.id].filter(
      Boolean
    )
  };
}

function deleteProduct(state, action) {
  const { [action.id]: _, ...byIdWithoutDeleted } = state.byId;
  return {
    ...state,
    byId: byIdWithoutDeleted,
    allIds: state.allIds.filter(id => id !== action.id)
  };
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProduct(state, action);
    case DELETE_PRODUCT:
      return deleteProduct(state, action);
    case CLEAR_CART:
      return {
        ...state,
        byId: INITIAL_STATE.byId,
        allIds: INITIAL_STATE.allIds
      };

    default:
      return state;
  }
};

export default cartReducer;
