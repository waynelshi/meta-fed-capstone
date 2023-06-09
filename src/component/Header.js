import logo from "./../image/logo.svg"
import { Routes, Route, Link} from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';

const Header = () => {
    return(
        <div className="header">
            <header>
                <nav>
                <img src={logo} alt="Logo" />
                <Link to="/" className="nav-item">HOME</Link>
                <Link to="/" className="nav-item">ABOUT</Link>
                <Link to="/" className="nav-item">MENU</Link>
                <Link to="/booking" className="nav-item">RESERVATION</Link>
                <Link to="/" className="nav-item">ORDER ONLINE</Link>
                <Link to="/" className="nav-item">LOGIN</Link>
                 </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/booking" element={<BookingPage />} />
                </Routes>
            </header>
        </div>
    );
}

export default Header;