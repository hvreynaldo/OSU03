import { FC } from 'react';
import Button from '../ui/Button';

const MissionContent: FC = () => (
  <div>
    <h2 className="text-4xl font-bold text-gray-900 mb-8">
      Welcome to The Innovation Foundation
    </h2>
    <p className="text-lg text-gray-700 mb-6">
      Our mission is to maximize OSU's excellence in aerospace and advanced mobility, 
      energy, agriculture, and One Health by translating innovative applied research into products 
      and services, facilitating strong partnerships with aligned industry and regional partners, 
      and investing in the development of emerging companies — all for the benefit of society.
    </p>
    <Button href="#about" showArrow>About Us</Button>
  </div>
);

export default MissionContent;