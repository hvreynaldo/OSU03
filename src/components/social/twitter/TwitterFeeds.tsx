import { FC } from 'react';
import { TWITTER_ACCOUNTS } from '../../../utils/constants/social';

const TwitterFeeds: FC = () => (
  <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl">
    <div className="text-center text-gray-300">
      {TWITTER_ACCOUNTS.map(account => (
        <div key={account.username} className="mb-4 last:mb-0">
          <a
            href={`https://twitter.com/${account.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6600] hover:text-white transition-colors"
          >
            @{account.username}
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default TwitterFeeds;