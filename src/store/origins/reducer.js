import {
  PRODUCT_ORIGINS_SUCCESS,
  PRODUCT_ORIGINS_LOADING,
  PRODUCT_ORIGINS_ERROR
} from "./actionTypes";

export const INITIAL_STATE = {
  origins: [],
  loading: false,
  error: ""
};

const originsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_ORIGINS_SUCCESS:
      return {
        ...state,
        origins: action.payload
      };

    case PRODUCT_ORIGINS_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case PRODUCT_ORIGINS_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default originsReducer;
