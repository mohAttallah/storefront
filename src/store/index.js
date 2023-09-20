import { combineReducers, createStore } from "redux";
import categories from "./categories/index";
import products from "./products";
import cart from "./cart";
const reducer = combineReducers({ categories, products, cart })

const store = () => {
    return createStore(reducer);
}

export default store();