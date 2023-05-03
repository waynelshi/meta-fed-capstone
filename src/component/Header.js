import Nav from "./Nav";
import logo from "./../image/logo.svg"

function Header() {
    return(
        <div className="container">
            <header>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <Nav />
            </header>
        </div>
    );
}

export default Header;