import { FC } from 'react';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface ViewerControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const ViewerControls: FC<ViewerControlsProps> = ({ onZoomIn, onZoomOut }) => (
  <div className="absolute left-4 bottom-4 flex flex-col gap-2">
    <button
      onClick={(e) => {
        e.stopPropagation();
        onZoomIn();
      }}
      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
      aria-label="Zoom in"
    >
      <ZoomIn className="w-6 h-6 text-white" />
    </button>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onZoomOut();
      }}
      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
      aria-label="Zoom out"
    >
      <ZoomOut className="w-6 h-6 text-white" />
    </button>
  </div>
);

export default ViewerControls;