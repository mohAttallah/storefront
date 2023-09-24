import { configureStore } from "@reduxjs/toolkit";

import categories from "./categories/index";
import cart from "./cart";
import products from "./products";

const store = configureStore({
    reducer: { categories: categories, cart: cart, products: products }
})

export default store;