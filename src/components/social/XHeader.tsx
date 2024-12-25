import { FC } from 'react';
import { useTwitterScript } from './hooks/useTwitterScript';
import SocialAccountList from './components/SocialAccountList';

const XHeader: FC = () => {
  useTwitterScript();

  return (
    <div className="text-center mb-12">
      <h2 className="font-mono text-4xl font-bold mb-4">
        Latest Updates
      </h2>
      <p className="text-xl text-gray-300 mb-6">
        Follow our journey in artificial intelligence and innovation
      </p>
      <SocialAccountList />
    </div>
  );
};

export default XHeader;