import { FC, useState } from 'react';
import { cn } from '../../../utils/classNames';

interface ResponsiveVideoProps {
  src: string;
  type: string;
  className?: string;
}

const ResponsiveVideo: FC<ResponsiveVideoProps> = ({ src, type, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full pb-[56.25%]"> {/* 16:9 aspect ratio */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}
      {type === 'image/gif' ? (
        <img
          src={src}
          alt="AI Animation"
          className={cn(
            "absolute top-0 left-0 w-full h-full object-cover",
            isLoading ? "opacity-0" : "opacity-100",
            "transition-opacity duration-300",
            className
          )}
          onLoad={() => setIsLoading(false)}
        />
      ) : (
        <video
          className={cn(
            "absolute top-0 left-0 w-full h-full object-cover",
            isLoading ? "opacity-0" : "opacity-100",
            "transition-opacity duration-300",
            className
          )}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoading(false)}
        >
          <source src={src} type={type} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default ResponsiveVideo;