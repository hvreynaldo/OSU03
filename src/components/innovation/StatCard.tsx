import { FC } from 'react';
import { useInView } from '../../hooks/useInView';

interface StatCardProps {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

const StatCard: FC<StatCardProps> = ({ label, value, prefix = '', suffix = '' }) => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
    >
      <div className="font-mono text-3xl font-bold mb-2">
        {prefix}
        <span className={inView ? 'animate-count' : ''}>
          {value}
        </span>
        {suffix}
      </div>
      <p className="text-gray-300">{label}</p>
    </div>
  );
};

export default StatCard;