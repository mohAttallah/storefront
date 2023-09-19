import { connect } from "react-redux";
const randomData = {
    Electronics: {
        id: 1,
        title: 'Electronics',
        subtitle: 'Explore the latest gadgets and tech',
        photo: 'https://example.com/electronics.jpg',
    },
    Accessories: {
        id: 2,
        title: 'Accessories',
        subtitle: 'Find stylish accessories for any occasion',
        photo: 'https://example.com/accessories.jpg',
    },
    Toys: {
        id: 3,
        title: 'Toys',
        subtitle: 'Fun and games for all ages',
        photo: 'https://example.com/toys.jpg',
    },
    'Home & Kitchen': {
        id: 4,
        title: 'Home & Kitchen',
        subtitle: 'Upgrade your living space',
        photo: 'https://example.com/home-kitchen.jpg',
    },
};


function Products(props) {
    const { categories } = props;
    let activeItem = null;

    categories.categories.forEach(item => {
        if (item.active === true) {
            activeItem = item.name;
            return;
        }
    });
    const activeItemData = randomData[activeItem];

    return (
        <div>
            {activeItemData && (
                <div>
                    <h2>{activeItemData.title}</h2>
                    <p>{activeItemData.subtitle}</p>
                    <img src={activeItemData.photo} alt={activeItemData.title} />
                </div>
            )}
        </div>
    );
}

const mapStateToProps = state => ({
    categories: state.categories
});

export default connect(mapStateToProps)(Products);
