import { GET_PRODUCTS_SUCCESS, PUBLISH_PRODUCT } from "./actionTypes";

export const INITIAL_STATE = {
  byId: {},
  allIds: []
};

const productsReducer = (state = INITIAL_STATE, { type, ...actionData }) => {
  switch (type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        byId: {
          ...actionData.byId
        },
        allIds: [...actionData.allIds]
      };

    case PUBLISH_PRODUCT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [actionData.id]: {
            ...actionData
          }
        },
        allIds: [...state.allIds, actionData.id]
      };

    default:
      return state;
  }
};

export default productsReducer;
