import { FC, useRef, useEffect } from 'react';

interface VideoPlayerProps {
  url: string;
  title: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ url, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Enable picture-in-picture if supported
    if (document.pictureInPictureEnabled) {
      video.addEventListener('enterpictureinpicture', () => {
        console.log('Video entered picture-in-picture mode');
      });
      video.addEventListener('leavepictureinpicture', () => {
        console.log('Video left picture-in-picture mode');
      });
    }

    // Handle keyboard shortcuts
    const handleKeydown = (e: KeyboardEvent) => {
      if (!video) return;
      
      switch(e.key.toLowerCase()) {
        case ' ':
        case 'k':
          e.preventDefault();
          video.paused ? video.play() : video.pause();
          break;
        case 'f':
          e.preventDefault();
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            video.requestFullscreen();
          }
          break;
        case 'm':
          e.preventDefault();
          video.muted = !video.muted;
          break;
        case 'arrowleft':
          e.preventDefault();
          video.currentTime = Math.max(0, video.currentTime - 5);
          break;
        case 'arrowright':
          e.preventDefault();
          video.currentTime = Math.min(video.duration, video.currentTime + 5);
          break;
      }
    };

    video.addEventListener('keydown', handleKeydown);
    return () => video.removeEventListener('keydown', handleKeydown);
  }, []);

  return (
    <div className="relative w-full pt-[56.25%] bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full"
        controls
        playsInline
        preload="metadata"
        controlsList="nodownload"
        aria-label={title}
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;