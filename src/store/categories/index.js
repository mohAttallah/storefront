/* eslint-disable  */


const initialState = {
    categories: [
        { name: "Electronics", active: true },
        { name: "Accessories", active: false },
        { name: "Toys", active: false },
        { name: "Home & Kitchen", active: false },
    ],
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'SET_ACTIVE':
            const updatedCategories = state.categories.map(category => {
                if (category.name === payload) {
                    return { name: category.name, active: true }
                } else {
                    return { name: category.name, active: false }
                }
            })
            return { ...state, categories: updatedCategories };
        default:
            return state;
    }
}

export const setActive = (name) => {
    return {
        type: 'SET_ACTIVE',
        payload: name
    }
}

/* eslint-enable */
