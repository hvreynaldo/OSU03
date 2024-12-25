import { FC, useState } from 'react';
import { cn } from '../../../utils/classNames';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ResponsiveImage: FC<ResponsiveImageProps> = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-top">
          <div className="w-8 h-8 border-4 border-[#FF6600]/20 border-t-[#FF6600] rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover",
          isLoading ? "opacity-0" : "opacity-100",
          "transition-opacity duration-300",
          className
        )}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
      />
    </>
  );
};

export default ResponsiveImage;