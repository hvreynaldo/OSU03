import { FC } from 'react';
import { cn } from '../../../utils/classNames';

interface ImageContainerProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const ImageContainer: FC<ImageContainerProps> = ({ className, children, onClick }) => (
  <div 
    className={cn(
      "relative w-full pb-[75%]", // 16:9 aspect ratio
      "overflow-hidden bg-gray-100",
      className
    )}
    onClick={onClick}
  >
    <div className="absolute inset-0">
      {children}
    </div>
  </div>
);

export default ImageContainer;