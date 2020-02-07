import { combineReducers } from "redux";
import productsReducer from "./products/reducer";
import cartReducer from "./cart/reducer";
import filterReducer from "./filter/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  filter: filterReducer,
  cart: cartReducer
});

export default rootReducer;
