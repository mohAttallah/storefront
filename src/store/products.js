/* eslint-disable  */
const initialState = {
    Electronics: {
        items: [
            {
                id: 1,
                title: 'Smartphones',
                subtitle: 'Explore the latest smartphones and gadgets',
                photo: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                price: 599.99, // Add the 'price' property here
            },
            {
                id: 2,
                title: 'Laptops',
                subtitle: 'Discover powerful laptops for work and play',
                photo: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                price: 999.99, // Add the 'price' property here
            },
            {
                id: 3,
                title: 'Cameras',
                subtitle: 'Capture your memories with high-quality cameras',
                photo: 'https://images.pexels.com/photos/3497065/pexels-photo-3497065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                price: 399.99, // Add the 'price' property here
            },
        ],
        active: true,
    },
    Accessories: {
        items: [
            {
                id: 4,
                title: 'Headphones',
                subtitle: 'Immerse yourself in music with quality headphones',
                photo: 'https://images.pexels.com/photos/5081386/pexels-photo-5081386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                price: 99.99, // Add the 'price' property here
            },
            {
                id: 5,
                title: 'Watches',
                subtitle: 'Stay stylish and punctual with trendy watches',
                photo: 'https://images.pexels.com/photos/2494608/pexels-photo-2494608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                price: 149.99, // Add the 'price' property here
            },
        ],
        active: false,
    },
    'Home & Kitchen': {
        items: [
            {
                id: 7,
                title: 'Kitchen Appliances',
                subtitle: 'Upgrade your kitchen with modern appliances',
                photo: 'https://images.pexels.com/photos/1450907/pexels-photo-1450907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                price: 299.99, // Add the 'price' property here
            },
            {
                id: 8,
                title: 'Furniture',
                subtitle: 'Furnish your home with elegant furniture',
                photo: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                price: 599.99, // Add the 'price' property here
            },
        ],
        active: false,
    },
    Toys: {
        items: [
            {
                id: 9,
                title: 'Action Figures',
                subtitle: 'Collectible action figures for kids and collectors',
                photo: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400',
                price: 19.99, // Add the 'price' property here
            },
            {
                id: 10,
                title: 'Board Games',
                subtitle: 'Fun board games for family entertainment',
                photo: 'https://images.pexels.com/photos/1422673/pexels-photo-1422673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                price: 29.99, // Add the 'price' property here
            },
            {
                id: 11,
                title: 'Building Blocks',
                subtitle: 'Build and create with building block sets',
                photo: 'https://images.pexels.com/photos/1148496/pexels-photo-1148496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                price: 15.99, // Add the 'price' property here
            },
        ],
        active: false,
    },
};


export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_ACTIVE':
            const updatedState = {};
            for (const category in state) {
                if (category === payload) {
                    updatedState[category] = {
                        ...state[category],
                        active: true,
                    };
                } else {
                    updatedState[category] = {
                        ...state[category],
                        active: false,
                    };
                }
            }

            return updatedState;

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
