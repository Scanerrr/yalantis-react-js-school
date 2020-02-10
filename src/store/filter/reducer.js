import { UPDATE_FILTER } from "./actionTypes";

const INITIAL_STATE = {
  page: 1,
  perPage: 20,
  totalItems: 50,
  origins: null,
  minPrice: null,
  maxPrice: null
};

const filterReducer = (state = INITIAL_STATE, { type, ...actionData }) => {
  switch (type) {
    case UPDATE_FILTER:
      return {
        ...state,
        ...actionData
      };

    default:
      return state;
  }
};

export default filterReducer;
