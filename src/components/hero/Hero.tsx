import { FC } from 'react';
import SplineBackground from './SplineBackground';
import HeroContent from './HeroContent';

const Hero: FC = () => (
  <div className="relative h-screen overflow-hidden">
    <SplineBackground />
    <div className="relative z-20"> {/* Ensure content is above background */}
      <HeroContent />
    </div>
  </div>
);

export default Hero;