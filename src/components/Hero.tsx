import { FC } from 'react';
import SplineBackground from './hero/SplineBackground';
import HeroContent from './hero/HeroContent';

const Hero: FC = () => (
  <div className="relative h-screen overflow-hidden">
    <SplineBackground />
    <div className="relative z-20">
      <HeroContent />
    </div>
  </div>
);

export default Hero;