import "./products.scss";
import { useState } from "react";
import { setProduct } from "../../store/cart";
import { useSelector, useDispatch } from 'react-redux';
import { get } from "../../store/products";
import { useEffect } from "react";
import { Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
import { Link } from "react-router-dom";
function Products() {

    const dispatch = useDispatch();

    // State
    const cartState = useSelector((state) => state.cart);
    const productsState = useSelector((state) => state.products);

    const [isLoadingData, setIsLoadingData] = useState(false);
    const categoriesState = useSelector((state) => state.categories);

    useEffect(() => {
        if (productsState.length === 0) {
            setIsLoadingData(true);

        }
        dispatch(get()).then(() => {
            setIsLoadingData(false);
        });
    }, [categoriesState, cartState])
    console.log(productsState)
    if (isLoadingData) {
        return (<Stack>
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
        </Stack>);
    }


    const activeItem = categoriesState.find(item => item.active === true);
    let filteredProducts = []
    if (activeItem) {
        filteredProducts = productsState.filter(product => product.category === activeItem.name);

    }

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

                        <li>
                            <Link to={`/details/${item.id}`}>VIEW DETAILS</Link>

                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Products;
