import { combineReducers } from "redux";
import formReducer from "./formReducer";
import originsReducer from "./origins/reducer";
import productsReducer from "./products/reducer";
import productDetailsReducer from "./productDetails/reducer";
import cartReducer from "./cart/reducer";
import filterReducer from "./filter/reducer";
import modalReducer from "./modal/reducer";

const rootReducer = combineReducers({
  origins: originsReducer,
  products: productsReducer,
  productDetails: productDetailsReducer,
  filter: filterReducer,
  cart: cartReducer,
  form: formReducer,
  modal: modalReducer
});

export default rootReducer;
