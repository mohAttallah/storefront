/* eslint-disable  */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [

]



export const getCategories = () => async dispatch => {
    try {
        const res = await axios.get('https://api-auth-ehg1.onrender.com/category');
        console.log("res",res.data)
        dispatch(setCategories(res.data));
    } catch (error) {
        console.error('Error fetching the Category:', error);
    }
}


const categoriesSlicer = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            return action.payload;
        },
        setActive: (state, action) => {
            const { payload } = action;
            return state.map(category => ({
                ...category,
                active: category.name === payload,
            }))
        }
    },
})

export const { setActive, setCategories } = categoriesSlicer.actions;
export default categoriesSlicer.reducer;



/* eslint-enable */
