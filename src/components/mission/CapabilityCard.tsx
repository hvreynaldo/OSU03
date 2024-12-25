import { FC } from 'react';
import { AICapability } from '../../utils/types';

const CapabilityCard: FC<AICapability> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default CapabilityCard;