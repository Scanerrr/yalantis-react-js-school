import { TOGGLE_MODAL } from "./actionTypes";

const INITIAL_STATE = false;

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return !state;

    default:
      return state;
  }
};

export default modalReducer;
