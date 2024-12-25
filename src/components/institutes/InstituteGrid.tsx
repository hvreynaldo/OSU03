import { FC } from 'react';
import { institutes } from '../../data/institutes';
import InstituteCard from './InstituteCard';

const InstituteGrid: FC = () => (
  <div className="grid md:grid-cols-3 gap-8">
    {institutes.map((institute, index) => (
      <InstituteCard key={index} institute={institute} />
    ))}
  </div>
);

export default InstituteGrid;