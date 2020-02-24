import { UPDATE_FILTER } from "./actionTypes";

const INITIAL_STATE = {
  page: 1,
  perPage: 20,
  origins: [],
  minPrice: null,
  maxPrice: null
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default filterReducer;
