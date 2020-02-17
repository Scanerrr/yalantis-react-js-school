import { GET_SINGLE_PRODUCT } from "./actionTypes";

export const INITIAL_STATE = null;

const singleProductReducer = (state = INITIAL_STATE, { type, ...payload }) => {
  switch (type) {
    case GET_SINGLE_PRODUCT:
      return {
        ...payload
      };

    default:
      return state;
  }
};

export default singleProductReducer;
