import { FC } from 'react';

interface HeroBackgroundProps {
  imageUrl: string;
}

const HeroBackground: FC<HeroBackgroundProps> = ({ imageUrl }) => (
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url('${imageUrl}')` }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
);

export default HeroBackground;