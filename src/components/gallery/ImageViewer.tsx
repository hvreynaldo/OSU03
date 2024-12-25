import { FC, useCallback, useEffect } from 'react';
import { useImageViewer } from './hooks/useImageViewer';
import CloseButton from './viewer/CloseButton';
import ViewerToolbar from './viewer/ViewerToolbar';
import ViewerImage from './viewer/ViewerImage';

interface ImageViewerProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageViewer: FC<ImageViewerProps> = ({ src, alt, onClose }) => {
  const { state, handlers } = useImageViewer();

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key.toLowerCase()) {
      case 'escape':
        onClose();
        break;
      case '+':
      case '=':
        handlers.handleZoom(0.1);
        break;
      case '-':
        handlers.handleZoom(-0.1);
        break;
      case 'r':
        handlers.handleRotate(90);
        break;
      case 'f':
        handlers.resetView();
        break;
    }
  }, [onClose, handlers]);

  const handleDownload = useCallback(async () => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = alt || 'image';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download image:', error);
    }
  }, [src, alt]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <CloseButton onClose={onClose} />
      
      <ViewerToolbar
        scale={state.scale}
        onZoomIn={() => handlers.handleZoom(0.1)}
        onZoomOut={() => handlers.handleZoom(-0.1)}
        onRotateLeft={() => handlers.handleRotate(-90)}
        onRotateRight={() => handlers.handleRotate(90)}
        onReset={handlers.resetView}
        onDownload={handleDownload}
      />

      <ViewerImage
        src={src}
        alt={alt}
        scale={state.scale}
        rotation={state.rotation}
        position={state.position}
        onMouseDown={handlers.handleMouseDown}
        onMouseMove={handlers.handleMouseMove}
        onMouseUp={handlers.handleMouseUp}
      />
    </div>
  );
};

export default ImageViewer;