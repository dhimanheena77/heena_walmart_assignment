import { combineReducers } from "redux";
import discount from "./discount";
import product from "./product";

export default combineReducers({
  product,
  discount
});
