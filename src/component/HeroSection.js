import welcome from './../image/welcome.jpg';

const HeroSection = () => {
    return (
        <div>
            <div id="hero-section">
                <div className="intro-text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus incidunt quos </p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus incidunt quos velit voluptate nulla error magnam. Atque officiis voluptate </p>
                    <button className="btn-reserve">Reserve a Table</button>
                </div>
                <div className="intro-image">
                    <img src={welcome} alt="welcome" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;