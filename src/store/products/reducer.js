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

const productsReducer = (state = INITIAL_STATE, { type, ...payload }) => {
  switch (type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        byId: {
          ...payload.byId
        },
        allIds: [...payload.allIds]
      };

    case PUBLISH_PRODUCT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [payload.id]: {
            ...payload
          }
        },
        allIds: [...state.allIds, payload.id]
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [payload.id]: {
            ...payload
          }
        }
      };

    case SET_PRODUCT_EDIT_MODE:
      return {
        ...state,
        editModeProductId: payload.productId
      };

    case UPDATE_TOTAL_ITEMS:
      return {
        ...state,
        totalItems: payload.totalItems
      };

    default:
      return state;
  }
};

export default productsReducer;
