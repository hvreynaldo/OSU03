import { FC } from 'react';

interface TwitterFollowButtonProps {
  username: string;
}

const TwitterFollowButton: FC<TwitterFollowButtonProps> = ({ username }) => (
  <a
    href={`https://twitter.com/${username}?ref_src=twsrc%5Etfw`}
    className="twitter-follow-button"
    data-show-count="false"
  >
    Follow @{username}
  </a>
);

export default TwitterFollowButton;