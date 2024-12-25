import { FC } from 'react';
import { RefreshCw } from 'lucide-react';

interface XErrorProps {
  username: string;
}

const XError: FC<XErrorProps> = ({ username }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 text-center">
    <div className="mb-4 text-gray-400">
      <RefreshCw className="w-12 h-12 mx-auto" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      Unable to load tweets
    </h3>
    <p className="text-gray-600 mb-4">
      We couldn't load the latest tweets from @{username}. Please try again later.
    </p>
    <button
      onClick={() => window.location.reload()}
      className="inline-flex items-center px-4 py-2 bg-[#FF6600] text-white rounded-md hover:bg-[#CC5200] transition-colors"
    >
      <RefreshCw className="w-4 h-4 mr-2" />
      Retry
    </button>
  </div>
);

export default XError;