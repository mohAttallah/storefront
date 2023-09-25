import { useSelector } from "react-redux";
import './cart.scss'
function Cart() {
    const cart = useSelector(state => state.cart.cart)
    let total = 0;

    for (const item of cart) {
        total += parseInt(item.price);
    }

    return (
        <div className="body">
            <h2>Shopping Cart <bold className="bold">({cart.length} items)</bold></h2>

            <div className="cart-container">
                <div className="cart-items">
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.photo} alt={item.title} className="item-image" />
                            <div className="item-details">
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                    <p>{item.category}</p>
                                </div>
                                <p className="price">${item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="summary">
                    <h3>Order Summary</h3>
                    <p>Total Price: ${total}</p>
                    <button>Chackout ➡ </button>
                </div>
            </div>
        </div>

    );
}

export default Cart;