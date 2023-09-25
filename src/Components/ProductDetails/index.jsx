import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
function Details() {
    const { itemId } = useParams();
    const products = useSelector(state => state.products)
    const itemData = products.find(item => item.id === parseInt(itemId));

    console.log("sss", itemData)
    if (!itemData) {
        return (
            <div className="item-not-found">
                Item not found.
            </div>
        );
    }
    return (

        <div className="item-card">
            <img src={itemData.photo} alt={itemData.title} className="item-image" />
            <h2 className="item-title">{itemData.title}</h2>
            <p className="item-subtitle">{itemData.subtitle}</p>
            <p className="item-quantity">Quantity: {itemData.quantity}</p>
            <p className="item-price">Price: <strong>{Math.floor(itemData.price)}$</strong></p>
            <Link className="back" to="/" >Back to Home</Link>

        </div>
    )

}

export default Details;