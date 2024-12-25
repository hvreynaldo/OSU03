import { FC } from 'react';
import useVimeoScript from './hooks/useVimeoScript';

const VimeoPlayer: FC = () => {
  useVimeoScript();

  return (
    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }} className="rounded-lg overflow-hidden shadow-2xl">
      <iframe 
        src="https://player.vimeo.com/video/1042170361?badge=0&autopause=0&player_id=0&app_id=58479"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="IF Ad 2.mp4"
      />
    </div>
  );
};

export default VimeoPlayer;