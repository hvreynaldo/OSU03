import { FC } from 'react';

const YouTubePlayer: FC = () => (
  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm">
    <iframe 
      width="560"
      height="700"
      src="https://www.youtube.com/embed/GzkuWTi_1uQ?si=QT2w_QQLjHN7RpBk"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="w-full h-full"
    />
  </div>
);

export default YouTubePlayer;