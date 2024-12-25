import { FC } from 'react';
import { X } from 'lucide-react';

interface CloseButtonProps {
  onClose: () => void;
}

const CloseButton: FC<CloseButtonProps> = ({ onClose }) => (
  <button
    onClick={(e) => {
      e.stopPropagation();
      onClose();
    }}
    className="absolute top-4 left-4 p-2 bg-black/75 rounded-full hover:bg-black/90 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 z-[60]"
    aria-label="Close viewer"
  >
    <X className="w-6 h-6 text-white" />
  </button>
);

export default CloseButton;