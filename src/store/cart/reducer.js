import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  CLEAR_CART,
  UPDATE_PRODUCT
} from "./actionTypes";

export const INITIAL_STATE = {
  byId: {},
  allIds: []
};

// ?TODO: is there a way to better implementation??
function addProduct(state, action) {
  const { product, quantity } = action;
  const isProductInCart = !!state.byId[product.id];
  if (isProductInCart) {
    return updateProduct(state, {
      id: product.id,
      quantity: state.byId[product.id].quantity + quantity
    });
  }
  return {
    ...state,
    byId: {
      ...state.byId,
      [product.id]: {
        ...product,
        quantity
      }
    },
    allIds: [...state.allIds, product.id]
  };
}

function updateProduct(state, action) {
  const { id, quantity } = action;
  return {
    ...state,
    byId: {
      ...state.byId,
      [id]: {
        ...state.byId[id],
        quantity
      }
    }
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
    case UPDATE_PRODUCT:
      return updateProduct(state, action);
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
