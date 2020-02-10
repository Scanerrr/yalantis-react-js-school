import { GET_SINGLE_PRODUCT } from "./actionTypes";

export const INITIAL_STATE = null;

const singleProductReducer = (
  state = INITIAL_STATE,
  { type, ...actionData }
) => {
  switch (type) {
    case GET_SINGLE_PRODUCT:
      return {
        ...actionData
      };

    default:
      return state;
  }
};

export default singleProductReducer;
