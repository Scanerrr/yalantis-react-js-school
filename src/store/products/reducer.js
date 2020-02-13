import {
  GET_PRODUCTS_SUCCESS,
  PUBLISH_PRODUCT,
  SET_PRODUCT_EDIT_MODE,
  UPDATE_PRODUCT
} from "./actionTypes";

export const INITIAL_STATE = {
  byId: {},
  allIds: [],
  editModeProductId: null
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

    case UPDATE_PRODUCT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [actionData.id]: {
            ...actionData
          }
        }
      };

    case SET_PRODUCT_EDIT_MODE:
      return {
        ...state,
        editModeProductId: actionData.productId
      };

    default:
      return state;
  }
};

export default productsReducer;
