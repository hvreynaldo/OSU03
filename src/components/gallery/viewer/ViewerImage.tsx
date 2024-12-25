import { FC, useState } from 'react';

interface ViewerImageProps {
  src: string;
  alt: string;
  scale: number;
  rotation: number;
  position: { x: number; y: number };
  onMouseDown: (e: React.MouseEvent) => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseUp: () => void;
  onLoad?: () => void;
  onError?: () => void;
}

const ViewerImage: FC<ViewerImageProps> = ({
  src,
  alt,
  scale,
  rotation,
  position,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onLoad,
  onError
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div className="flex items-center justify-center text-white">
        Failed to load image
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}
      <div 
        className="relative overflow-hidden w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <img
          src={src}
          alt={alt}
          className="absolute transition-transform duration-75 max-w-none select-none"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg) scale(${scale})`,
            transformOrigin: 'center',
            opacity: isLoading ? 0 : 1
          }}
          onLoad={handleLoad}
          onError={handleError}
          draggable={false}
        />
      </div>
    </>
  );
};

export default ViewerImage;