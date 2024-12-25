import { FC } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, RotateCw, Maximize2, Download } from 'lucide-react';

interface ViewerToolbarProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onRotateLeft: () => void;
  onRotateRight: () => void;
  onReset: () => void;
  onDownload: () => void;
  scale: number;
}

const ViewerToolbar: FC<ViewerToolbarProps> = ({
  onZoomIn,
  onZoomOut,
  onRotateLeft,
  onRotateRight,
  onReset,
  onDownload,
  scale
}) => (
  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 bg-black/75 rounded-full px-4 py-2 backdrop-blur-sm">
    <button
      onClick={(e) => {
        e.stopPropagation();
        onZoomOut();
      }}
      className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer group"
      aria-label="Zoom out"
    >
      <ZoomOut className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
    </button>
    
    <span className="text-white min-w-[4rem] text-center font-mono">
      {Math.round(scale * 100)}%
    </span>
    
    <button
      onClick={(e) => {
        e.stopPropagation();
        onZoomIn();
      }}
      className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer group"
      aria-label="Zoom in"
    >
      <ZoomIn className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
    </button>

    <div className="w-px h-6 bg-white/20 mx-2" />

    <button
      onClick={(e) => {
        e.stopPropagation();
        onRotateLeft();
      }}
      className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer group"
      aria-label="Rotate left"
    >
      <RotateCcw className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
    </button>

    <button
      onClick={(e) => {
        e.stopPropagation();
        onRotateRight();
      }}
      className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer group"
      aria-label="Rotate right"
    >
      <RotateCw className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
    </button>

    <div className="w-px h-6 bg-white/20 mx-2" />

    <button
      onClick={(e) => {
        e.stopPropagation();
        onReset();
      }}
      className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer group"
      aria-label="Reset view"
    >
      <Maximize2 className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
    </button>

    <button
      onClick={(e) => {
        e.stopPropagation();
        onDownload();
      }}
      className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer group"
      aria-label="Download image"
    >
      <Download className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
    </button>
  </div>
);

export default ViewerToolbar;