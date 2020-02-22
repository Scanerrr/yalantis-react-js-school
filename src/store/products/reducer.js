import {
  GET_PRODUCTS_LIST_SUCCESS,
  PUBLISH_PRODUCT,
  SET_PRODUCT_EDIT_MODE,
  UPDATE_PRODUCT,
  UPDATE_TOTAL_ITEMS,
  GET_PRODUCTS_LIST_LOADING,
  GET_PRODUCTS_LIST_ERROR
} from "./actionTypes";
import { normalize } from "../../utils/normalize";

export const INITIAL_STATE = {
  byId: {},
  allIds: [],
  editModeProductId: null,
  totalItems: 50,
  loading: false,
  error: ""
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LIST_SUCCESS:
      const normalizedProducts = normalize(action.payload?.items);
      return {
        ...state,
        byId: {
          ...normalizedProducts.byId
        },
        allIds: [...normalizedProducts.allIds],
        totalItems: action.payload.totalItems
      };
    case GET_PRODUCTS_LIST_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case GET_PRODUCTS_LIST_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case PUBLISH_PRODUCT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: {
            ...action.payload
          }
        },
        allIds: [...state.allIds, action.payload.id]
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: {
            ...action.payload
          }
        }
      };

    case SET_PRODUCT_EDIT_MODE:
      return {
        ...state,
        editModeProductId: action.payload.productId
      };

    case UPDATE_TOTAL_ITEMS:
      return {
        ...state,
        totalItems: action.payload.totalItems
      };

    default:
      return state;
  }
};

export default productsReducer;
