import {
  PRODUCTS_LIST_SUCCESS,
  SET_PRODUCT_EDIT,
  PRODUCTS_LIST_LOADING,
  PRODUCTS_LIST_ERROR,
  INSERT_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_LOADING,
  UPDATE_PRODUCT_ERROR
} from "./actionTypes";
import { normalize } from "../../utils/normalize";

export const INITIAL_STATE = {
  byId: {},
  allIds: [],
  edit: {
    productId: null,
    loading: false,
    error: ""
  },
  totalItems: 50,
  loading: false,
  error: ""
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_SUCCESS:
      const normalizedProducts = normalize(action.payload?.items);
      return {
        ...state,
        byId: {
          ...normalizedProducts.byId
        },
        allIds: [...normalizedProducts.allIds],
        totalItems: action.payload.totalItems
      };
    case PRODUCTS_LIST_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case PRODUCTS_LIST_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case INSERT_PRODUCT_SUCCESS:
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

    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: {
            ...action.payload
          }
        }
      };

    case UPDATE_PRODUCT_LOADING:
      return {
        ...state,
        edit: {
          ...state.edit,
          loading: action.payload
        }
      };
    case UPDATE_PRODUCT_ERROR:
      return {
        ...state,
        edit: {
          ...state.edit,
          error: action.payload
        }
      };

    case SET_PRODUCT_EDIT:
      if (!action.payload) {
        return {
          ...state,
          edit: {
            ...INITIAL_STATE.edit
          }
        };
      } else {
        return {
          ...state,
          edit: {
            ...state.edit,
            productId: action.payload
          }
        };
      }

    default:
      return state;
  }
};

export default productsReducer;
