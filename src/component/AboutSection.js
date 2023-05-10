import chef from './../image/chef.jpg';
import restaurant from './../image/restaurant.jpg';

const AboutSection = () => {
    return(
        <div className="container">
            <div id="about-section">
                <div className="about-intro">
                  <h1>Little Lemon</h1>
                  <h3>Chicago</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus incidunt quos velit voluptate nulla error magnam. Atque officiis voluptate </p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus incidunt quos velit voluptate nulla error magnam. Atque officiis voluptate </p>
                </div>
                <div className="chef">
                    <img src={chef} alt="Chef" />
                </div>
                <div className="restaurant">
                    <img src={restaurant} alt="Little Lemon Restaurant" />
                </div>
            </div>
        </div>
    );
}

export default AboutSection;