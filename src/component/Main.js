import welcome from './../image/welcome.jpg'
import gsalad from './../image/greeksalad.png'
import lemond from './../image/lemondessert.jpg'
import brushetta from './../image/brushetta.png'
import delivery from './../image/delivery.png'
import avatar from './../image/avatar.png'
import chevronl from './../image/chevronl-g.png'
import chevronr from './../image/chevronr-g.png'
import chef from './../image/chef.jpg'
import restaurant from './../image/restaurant.jpg'


function Main() {
    return(
        <div className="container">
            <main>
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
              <div id="testimonial-section">
                <div className="test-title"><h1>Testimonial</h1></div>
                <div className="testmonials">
                  <div className="chevron">
                    <img src={chevronl} alt='' />
                  </div>
                  <div className="tcard">
                    <div className="rating">
                      <h2>Rating <span>⭐⭐⭐⭐⭐</span></h2>
                    </div>
                    <div className="person">
                      <img src={avatar} alt="" />
                      <h1>Jeremy</h1>
                    </div>
                    <div className="comment">
                      <p>Lorem ipsum dolor sit amet consectetur quosLorem ipsum dolor sit amet consectetur</p>
                    </div>
                  </div>
                  <div className="tcard">
                    <div className="rating">
                      <h2>Rating <span>⭐⭐⭐⭐⭐</span></h2>
                    </div>
                    <div className="person">
                      <img src={avatar} alt="" />
                      <h1>James</h1>
                    </div>
                    <div className="comment">
                      <p>Lorem ipsum dolor sit amet consectetur quosLorem ipsum dolor sit amet consectetur</p>
                    </div>
                  </div>
                  <div className="tcard">
                    <div className="rating">
                      <h2>Rating <span>⭐⭐⭐⭐⭐</span></h2>
                    </div>
                    <div className="person">
                      <img src={avatar} alt="" />
                      <h1>Richard</h1>
                    </div>
                    <div className="comment">
                      <p>Lorem ipsum dolor sit amet consectetur quosLorem ipsum dolor sit amet consectetur</p>
                    </div>
                  </div>
                  <div className="tcard">
                    <div className="rating">
                      <h2>Rating <span>⭐⭐⭐⭐⭐</span></h2>
                    </div>
                    <div className="person">
                      <img src={avatar} alt="" />
                      <h1>Kate</h1>
                    </div>
                    <div className="comment">
                      <p>Lorem ipsum dolor sit amet consectetur quosLorem ipsum dolor sit amet consectetur</p>
                    </div>
                  </div>
                  <div className="chevron">
                    <img src={chevronr} alt='' />
                  </div>
                </div>
              </div>
              <div id="about-section">
                <div className="about-intro">
                  <h1>Little Lemon</h1>
                  <h3>Chicago</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus incidunt quos velit voluptate nulla error magnam. Atque officiis voluptate </p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus incidunt quos velit voluptate nulla error magnam. Atque officiis voluptate </p>
                </div>
                  <div className="chef"><img src={chef} alt="Chef" /></div>
                  <div className="restaurant"><img src={restaurant} alt="Little Lemon Restaurant" /></div>
              </div>
            </main>
        </div>
    );
}

export default Main;