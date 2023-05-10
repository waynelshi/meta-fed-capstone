import avatar from './../image/avatar.png';
import chevronl from './../image/chevronl-g.png';
import chevronr from './../image/chevronr-g.png';

function TestimonialSection() {
  return(
    <div className="container">
      <div id="testimonial-section">
          <div className="test-title"><h1>Testimonial</h1></div>
          <div className="testimonials">
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
    </div>
  );
}

export default TestimonialSection;