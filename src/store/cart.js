import axios from "axios";

const initialState = {
    cart: []
}

export default (state = initialState, action) => {
    console.log(initialState)

    const { type, payload } = action;
    switch (type) {

        case 'SET_PRODUCT':
            return {
                ...state,
                cart: [...state.cart, payload]
            };
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== payload.id)
            };
        default:
            return state;
    }
}

async function updateQuantity(item, action) {
    const id = item.id;
    const quantity = action === 'decrement' ? item.quantity - 1 : item.quantity + 1;

    try {
        await axios.put(`https://api-auth-ehg1.onrender.com/api/v1/store/${id}`, {
            quantity: quantity,
        });
    } catch (err) {
        console.log("error when updating the quantity", err);
    }
}



export const setProduct = (product) => {
    return async (dispatch) => {
        await updateQuantity(product, 'decrement');
        dispatch({
            type: "SET_PRODUCT",
            payload: product
        });
    };
};

export const removeProduct = (product) => {
    return async (dispatch) => {
        await updateQuantity(product, 'increment'); 
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: product
        });
    };
};

