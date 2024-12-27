import { FC } from 'react';
import useVimeoScript from './hooks/useVimeoScript';

const VimeoPlayer: FC = () => {
  useVimeoScript();

  return (
    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }} className="rounded-lg overflow-hidden shadow-2xl">
      <iframe 
        src="https://player.vimeo.com/video/1042384751?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="IF Ad 4.mp4"
        > </iframe>
    </div>
    <script src="https://player.vimeo.com/api/player.js"> </script
  );
};

export default VimeoPlayer;
