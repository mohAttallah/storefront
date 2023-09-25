import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            updateQuantity(action.payload, "decrement");

            const updatedCart = [...state.cart, action.payload];
            state.cart = updatedCart;
        },
        removeProduct: (state, action) => {
            updateQuantity(action.payload, "increment");
            const updatedCart = state.cart.filter(
                (product) => product.id !== action.payload.id
            );
            state.cart = updatedCart;
        },
    },
});

export const { setProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;

async function updateQuantity(item, action) {
    const id = item.id;
    const quantity =
        action === "decrement" ? item.quantity - 1 : item.quantity + 1;

    try {
        await axios.put(`https://api-auth-ehg1.onrender.com/api/v1/store/${id}`, {
            quantity: quantity,
        });
    } catch (err) {
        console.log("error when updating the quantity", err);
    }
}
