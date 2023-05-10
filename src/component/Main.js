import HeroSection from './HeroSection';
import HighlightSection from './HighlightSection';
import TestimonialSection from './TestimonialSection';
import AboutSection from './AboutSection';

const Main = () => {
    return(
        <div>
            <main>
              <HeroSection />
              <HighlightSection />
              <TestimonialSection />
              <AboutSection />
            </main>
        </div>
    );
}

export default Main;