import { GET_PRODUCTS_SUCCESS } from "./actionTypes";

export const INITIAL_STATE = {
  byId: {},
  allIds: []
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...action.byId
        },
        allIds: [...state.allIds, ...action.allIds]
      };

    default:
      return state;
  }
};

export default productsReducer;
