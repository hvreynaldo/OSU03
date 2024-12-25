import { FC } from 'react';
import StatCard from './StatCard';
import { AI_STATISTICS } from '../../utils/constants';

const StatisticsGrid: FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
    {AI_STATISTICS.map((stat) => (
      <StatCard key={stat.id} {...stat} />
    ))}
  </div>
);

export default StatisticsGrid;