import { combineReducers } from "redux";
import productsReducer from "./products/reducer";
import checkoutReducer from "./checkout/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  checkout: checkoutReducer
});

export default rootReducer;
