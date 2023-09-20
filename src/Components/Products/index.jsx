import { connect } from "react-redux";
import "./products.scss"


function Products(props) {
    const { products } = props;
    let activeItem = null;
    for (const item in products) {
        if (products.hasOwnProperty(item) && products[item].active === true) {
            activeItem = item;
            break;
        }
    }

    const activeCategory = products[activeItem].items;
    console.log(activeCategory)

    return (
        <div className="main-section">
            {activeCategory.map(item => (
                <div key={item.id} className="card">
                    <img src={item.photo} alt={item.title} />
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                    <p>  Price: <strong>{Math.floor(item.price)}$</strong>
                    </p>
                    <ul>
                        <li>ADD TO CART</li>
                        <li>VIEW DETAILS</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}
const mapStateToProps = state => ({

    categories: state.categories,
    products: state.products
});

export default connect(mapStateToProps)(Products);
