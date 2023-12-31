import { useEffect } from "react";
import { setActive } from "../../store/categories";
import { getCategories } from "../../store/categories"
import "./categories.scss";
import { useSelector, useDispatch } from 'react-redux';

function Categories() {
    useEffect(() => {
        dispatch(getCategories())
    }, [])
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.categories);
    return (
        <div>
            <ul className="categories">{
                categories.map(item => (
                    <li onClick={() => dispatch(setActive(item.name))} key={item.name} className={item.active ? 'active' : ''}>
                        {item.name}
                    </li>
                ))
            }
            </ul>
        </div>
    );
}

export default Categories;
