import {
  GET_PRODUCTS_SUCCESS,
  PUBLISH_PRODUCT,
  SET_PRODUCT_EDIT_MODE,
  UPDATE_PRODUCT,
  UPDATE_TOTAL_ITEMS
} from "./actionTypes";

export const INITIAL_STATE = {
  byId: {},
  allIds: [],
  editModeProductId: null,
  totalItems: 50
};

const productsReducer = (state = INITIAL_STATE, { type, ...actionData }) => {
  switch (type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
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

    case UPDATE_TOTAL_ITEMS:
      return {
        ...state,
        totalItems: actionData.totalItems
      };

    default:
      return state;
  }
};

export default productsReducer;
