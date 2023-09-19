import { combineReducers, createStore } from "redux";
import categories from "./categories/index";
const reducer = combineReducers({ categories })

const store = () => {
    return createStore(reducer);
}

export default store();