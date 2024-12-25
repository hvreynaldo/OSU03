import { FC } from 'react';
import { TWITTER_ACCOUNTS } from '../../../utils/constants/social';
import TwitterFollowButton from './TwitterFollowButton';

const TwitterHeader: FC = () => (
  <div className="text-center mb-12">
    <h2 className="font-mono text-4xl font-bold mb-4">
      Latest Updates
    </h2>
    <p className="text-xl text-gray-300 mb-8">
      Follow our journey in artificial intelligence and innovation
    </p>
    <div className="flex flex-col gap-4">
      {TWITTER_ACCOUNTS.map(account => (
        <div key={account.username} className="flex items-center gap-4 justify-center">
          <TwitterFollowButton username={account.username} />
          <p className="text-gray-300 text-sm">{account.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TwitterHeader;