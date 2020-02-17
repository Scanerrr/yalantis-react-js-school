import { UPDATE_FILTER } from "./actionTypes";

const INITIAL_STATE = {
  page: 1,
  perPage: 20,
  origins: null,
  minPrice: null,
  maxPrice: null
};

const filterReducer = (state = INITIAL_STATE, { type, ...payload }) => {
  switch (type) {
    case UPDATE_FILTER:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};

export default filterReducer;
