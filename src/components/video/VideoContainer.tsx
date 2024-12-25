import { FC, useState } from 'react';
import useRumbleScript from './hooks/useRumbleScript';

const VideoContainer: FC = () => {
  const [hasError, setHasError] = useState(false);

  useRumbleScript();

  if (hasError) {
    return (
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm flex items-center justify-center">
        <p className="text-white text-center">
          Video failed to load. Please try refreshing the page.
        </p>
      </div>
    );
  }

  return (
    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm">
      <div 
        id="rumble_v62u42q" 
        className="rumble-video w-full h-full"
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export default VideoContainer;