import Nav from "./Nav";
import logo from "./../image/logo.svg"

function Header() {
    return(
        <div className="container">
            <header>
                <img src={logo} alt="Logo" />
                <Nav />
            </header>
        </div>
    );
}

export default Header;