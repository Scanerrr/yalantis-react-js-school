import { combineReducers } from "redux";
import formReducer from "./formReducer";
import productsReducer from "./products/reducer";
import singleProductReducer from "./singleProduct/reducer";
import cartReducer from "./cart/reducer";
import filterReducer from "./filter/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  filter: filterReducer,
  cart: cartReducer,
  form: formReducer
});

export default rootReducer;
