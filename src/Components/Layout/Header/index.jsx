import './header.scss'
import SimpleCart from '../../SimpleCart';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <nav className="navBar">
            <div className='left-header'>
                <Link to='/'>
                    <h1>OUR STORE</h1>
                </Link>
            </div>
            <div className='right-header'>
                <h3><SimpleCart /></h3>
            </div>

        </nav>
    );
}

export default Header;