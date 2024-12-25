import { FC } from 'react';
import { pillars } from '../../data/pillars';
import PillarCard from './PillarCard';

const PillarGrid: FC = () => (
  <div className="grid grid-cols-2 gap-6">
    {pillars.map((pillar, index) => (
      <PillarCard key={index} pillar={pillar} />
    ))}
  </div>
);

export default PillarGrid;