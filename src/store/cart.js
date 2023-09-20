const initialState = {
    cart: []
}


export default (state = initialState, action) => {
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


export const setProduct = (product) => {
    return {
        type: 'SET_PRODUCT',
        payload: product
    }
}

export const removeProduct = (product) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: product
    }
}

