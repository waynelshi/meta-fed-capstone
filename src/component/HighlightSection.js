import gsalad from './../image/greeksalad.png';
import lemond from './../image/lemondessert.jpg';
import brushetta from './../image/brushetta.png';
import delivery from './../image/delivery.png';

const HighlightSection = () => {
    return (
        <div>
            <div id="highlight-section">
                <div className="highlight-title">
                    <h1>This Week's Special!</h1>
                    <button>Online Menu</button>
                </div>
                <div className="dishes">
                    <div className="dish">
                        <img src={gsalad} alt='Greek salad'/>
                        <h2>Greek Salad <span>$12.99</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus incidunt quosLorem ipsum dolor sit amet consectetur</p>
                        <p>Order a delivery <img src={delivery} alt='delivery' /></p>
                    </div>
                    <div className="dish">
                        <img src={brushetta} alt='brushetta'/>
                        <h2>Brushetta <span>$7.99</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus incidunt quosLorem ipsum dolor sit amet consectetur</p>
                        <p>Order a delivery <img src={delivery} alt='delivery' /></p>
                    </div>
                    <div className="dish">
                        <img src={lemond} alt='lemon dessert'/>
                        <h2>Lemon Dessert <span>$5.99</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus incidunt quosLorem ipsum dolor sit amet consectetur</p>
                        <p>Order a delivery <img src={delivery} alt='delivery' /></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HighlightSection;