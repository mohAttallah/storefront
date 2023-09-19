import './header.scss'
function Header() {
    return (
        <nav className="navBar">
            <div className='left-header'>
                <h1>OUR STORE</h1>
            </div>
            <div className='right-header'>
                <h3>CART</h3>
            </div>

        </nav>
    );
}

export default Header;