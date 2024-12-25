import { FC } from 'react';

interface FollowButtonProps {
  username: string;
}

export const FollowButton: FC<FollowButtonProps> = ({ username }) => (
  <a
    href={`https://twitter.com/${username}?ref_src=twsrc%5Etfw`}
    className="twitter-follow-button"
    data-show-count="false"
  >
    Follow @{username}
  </a>
);