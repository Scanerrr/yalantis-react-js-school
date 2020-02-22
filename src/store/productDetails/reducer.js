import {
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_LOADING,
  GET_PRODUCT_DETAILS_ERROR
} from "./actionTypes";

export const INITIAL_STATE = {
  product: null,
  loading: false,
  error: ""
};

const productDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        product: action.payload
      };
    case GET_PRODUCT_DETAILS_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case GET_PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default productDetailsReducer;
