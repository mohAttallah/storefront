/* eslint-disable  */
import { createSlice } from '@reduxjs/toolkit';


const initialState = [

    { name: "Electronics", active: true },
    { name: "Accessories", active: false },
    { name: "Toys", active: false },
    { name: "Home & Kitchen", active: false },
]


const categoriesSlicer = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setActive: (state, action) => {
            const { payload } = action;
            return state.map(category => ({
                ...category,
                active: category.name === payload,
            }))
        }
    },
})
export const { setActive } = categoriesSlicer.actions;
export default categoriesSlicer.reducer;

/* eslint-enable */
