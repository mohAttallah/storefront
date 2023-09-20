import './header.scss'
import Cart from '../../SimpleCart';
function Header() {
    return (
        <nav className="navBar">
            <div className='left-header'>
                <h1>OUR STORE</h1>
            </div>
            <div className='right-header'>
                <h3><Cart /></h3>
            </div>
           
        </nav>
    );
}

export default Header;