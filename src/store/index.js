import { combineReducers, createStore } from "redux";
import categories from "./categories/index";
import products from "./products";
const reducer = combineReducers({ categories, products })

const store = () => {
    return createStore(reducer);
}

export default store();