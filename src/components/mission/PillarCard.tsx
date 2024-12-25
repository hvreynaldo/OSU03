import { FC } from 'react';
import { Pillar } from '../../utils/types';

interface PillarCardProps {
  pillar: Pillar;
}

const PillarCard: FC<PillarCardProps> = ({ pillar }) => (
  <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{pillar.title}</h3>
    <p className="text-gray-600">{pillar.description}</p>
  </div>
);

export default PillarCard;