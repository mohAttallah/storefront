/* eslint-disable  */
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";


const initialState = [{

}]

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProducts: (state, action) => {
            return action.payload;
        },
    },
});


export default productsSlice.reducer;
export const { getProducts } = productsSlice.actions;

export const get = () => async (dispatch) => {
    try {
        const res = await axios.get("https://api-auth-ehg1.onrender.com/api/v1/store");
        dispatch(getProducts(res.data));
    } catch (error) {
        console.error("Error fetching store data:", error);
    }
};
/* eslint-enable */