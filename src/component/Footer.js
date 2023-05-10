import flogo from './../image/footer-logo.png'

const Footer = () => {
    return(
        <div>
            <footer>
                <div className="footer-links">
                    <div className="footer-logo">
                        <img src={flogo} alt="" width={100}/>
                    </div>
                    <div className="link">
                        <h2>DOORMAT NAVIGATION</h2>
                        <ul>
                            <li><a href="bing.com">Home</a></li>
                            <li><a href="bing.com">About</a></li>
                            <li><a href="bing.com">Menu</a></li>
                            <li><a href="bing.com">Reservation</a></li>
                            <li><a href="bing.com">Order Online</a></li>
                            <li><a href="bing.com">Login</a></li>
                        </ul>
                    </div>
                    <div className="link">
                        <h2>CONTACT</h2>
                        <ul>
                            <li>Phone Number</li>
                            <li>Address</li>
                            <li>E-mail</li>
                        </ul>
                    </div>
                    <div className="link">
                        <h2>SOCIAL MEDIA LINKS</h2>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright 2023 © Little Lemon</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;