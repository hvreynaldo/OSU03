import { FC, useEffect, useState } from 'react';
import { useInterval } from '../../hooks/useInterval';
import XSkeleton from './XSkeleton';
import XError from './XError';
import { useTwitterScript } from './hooks/useTwitterScript';
import { SOCIAL_ACCOUNTS } from '../../utils/constants/social';

const XFeed: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useTwitterScript();

  useEffect(() => {
    const loadTimeline = () => {
      try {
        if (window.twttr) {
          window.twttr.widgets.load();
          setIsLoading(false);
        }
      } catch (error) {
        setHasError(true);
        setIsLoading(false);
      }
    };

    loadTimeline();
  }, []);

  // Refresh timeline every 30 minutes
  useInterval(() => {
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  }, 30 * 60 * 1000);

  if (hasError) {
    return <XError username={SOCIAL_ACCOUNTS[0].username} />;
  }

  return (
    <div className="bg-transparent">
      {isLoading && <XSkeleton />}
      <div className={isLoading ? 'hidden' : 'block'}>
        {SOCIAL_ACCOUNTS.map(account => (
          <div key={account.username} className="mb-8 last:mb-0">
            <a
              className="twitter-timeline"
              data-theme="dark"
              data-chrome="noheader nofooter noborders transparent"
              data-tweet-limit="3"
              href={`https://twitter.com/${account.username}`}
            >
              Loading tweets from @{account.username}...
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default XFeed;