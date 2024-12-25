import { FC } from 'react';
import { Network } from 'lucide-react';

const HubHeader: FC = () => (
  <div className="flex items-center gap-8 mb-16">
    <div className="hidden md:flex items-center justify-center w-24 h-24 bg-white/10 rounded-2xl">
      <Network className="w-16 h-16 text-blue-400" />
    </div>
    <div>
      <h2 className="font-mono text-4xl font-bold mb-4">AI Innovation Hub</h2>
      <p className="text-xl text-gray-300 max-w-2xl">
        Pioneering the future of artificial intelligence through cutting-edge research, 
        development, and practical applications.
      </p>
    </div>
  </div>
);

export default HubHeader;