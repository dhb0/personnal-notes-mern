import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productsReducer } from "./dataReducer";

export default combineReducers({
  auth: authReducer,
  productsData: productsReducer,
});
