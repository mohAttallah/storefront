import { applyMiddleware, combineReducers, createStore } from "redux";
import categories from "./categories/index";
import cart from "./cart";
import products from "./products";
import thunk from "redux-thunk";
const reducer = combineReducers({ categories, cart, products })

const store = () => {
    return createStore(reducer, applyMiddleware(thunk));
}

export default store();