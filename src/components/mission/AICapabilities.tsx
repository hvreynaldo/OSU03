import { FC } from 'react';
import { AI_CAPABILITIES } from '../../utils/constants';
import CapabilityCard from './CapabilityCard';

const AICapabilities: FC = () => (
  <div className="grid md:grid-cols-2 gap-6 mb-12">
    {AI_CAPABILITIES.map((capability, index) => (
      <CapabilityCard key={index} {...capability} />
    ))}
  </div>
);

export default AICapabilities;