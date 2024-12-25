import { FC } from 'react';
import { SOCIAL_ACCOUNTS } from '../../../utils/constants/social';
import { FollowButton } from './FollowButton';

const SocialAccountList: FC = () => (
  <div className="flex flex-col gap-4">
    {SOCIAL_ACCOUNTS.map(account => (
      <div key={account.username} className="flex items-center gap-4">
        <FollowButton username={account.username} />
        <p className="text-gray-300 text-sm">{account.description}</p>
      </div>
    ))}
  </div>
);

export default SocialAccountList;