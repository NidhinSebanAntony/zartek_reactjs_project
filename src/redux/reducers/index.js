import { combineReducers } from "redux";
import { updateCart } from "./cartReducer";
import { getDataReducer } from "./productReducer";

export const rootReducer = combineReducers({
    data: getDataReducer,
    cart: updateCart
})