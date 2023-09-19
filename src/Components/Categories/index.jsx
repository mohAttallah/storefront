import { connect } from "react-redux";
import { setActive } from "../../store/categories";
import "./categories.scss";

function Categories(props) {
  
    return (
        <div>
            <ul className="categories">{
                props.categories.categories.map(item => (
                    <li onClick={() => props.setActive(item.name)} key={item.name} className={item.active ? 'active' : ''}>
                        {item.name}
                    </li>
                ))
            }
            </ul>
        </div>
    );
}
const mapDispatchProps = { setActive };
const mapStateToProps = state => ({
    categories: state.categories
})

export default connect(mapStateToProps, mapDispatchProps)(Categories);