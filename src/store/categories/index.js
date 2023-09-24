/* eslint-disable  */


const initialState = [

    { name: "Electronics", active: true },
    { name: "Accessories", active: false },
    { name: "Toys", active: false },
    { name: "Home & Kitchen", active: false },
]


export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_ACTIVE':
            const updatedCategories = state.map(category => ({
                ...category,
                active: category.name === payload,
            }));
            return updatedCategories;
        default:
            return state;
    }
};
export const setActive = (name) => {
    return {
        type: 'SET_ACTIVE',
        payload: name
    }
}

/* eslint-enable */
