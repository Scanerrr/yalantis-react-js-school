import {
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_LOADING,
  PRODUCT_DETAILS_ERROR
} from "./actionTypes";

export const INITIAL_STATE = {
  product: null,
  loading: false,
  error: ""
};

const productDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        product: action.payload
      };
    case PRODUCT_DETAILS_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default productDetailsReducer;
