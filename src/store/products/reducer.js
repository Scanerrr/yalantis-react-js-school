import { GET_PRODUCTS } from "./actionTypes";

//TODO: implement
export const INITIAL_STATE = {
  byId: {},
  allIDs: []
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default productsReducer;
