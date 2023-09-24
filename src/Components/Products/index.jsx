import "./products.scss";
import { setProduct } from "../../store/cart";
import { useSelector, useDispatch } from 'react-redux';
import { get } from "../../store/products";
import { useEffect } from "react";
function Products() {

    const dispatch = useDispatch();

    // State
    const cartState = useSelector((state) => state.cart);
    const productsState = useSelector((state) => state.products);
    const categoriesState = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(get())
    }, [categoriesState, cartState])


    const activeItem = categoriesState.find(item => item.active === true);
    const filteredProducts = productsState.filter(product => product.category === activeItem.name);

    return (
        <div className="main-section">
            {filteredProducts.map(item => (
                <div key={item.id} className="card">
                    <img src={item.photo} alt={item.title} />
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>  Price: <strong>{Math.floor(item.price)}$</strong>
                    </p>
                    <ul>
                        <li onClick={() => dispatch(setProduct(item))}>ADD TO CART</li>
                        <li>VIEW DETAILS</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Products;
