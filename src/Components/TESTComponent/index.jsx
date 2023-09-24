import { useSelector, useDispatch } from 'react-redux';
import { get } from '../../store/products'
function TEST() {
    const dispatch = useDispatch();
    const pro = useSelector((state) => state.pro);

    const buttonStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Change this to your desired color
    };
    console.log("pro", pro)
    return (
        <div>
            <button onClick={() => dispatch(get())} style={buttonStyle}>
                Click Me

            </button>

        </div>
    );
}

export default TEST;