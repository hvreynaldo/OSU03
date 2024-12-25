import { useState, useCallback, useRef, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

interface ImageViewerState {
  scale: number;
  rotation: number;
  position: Position;
}

export const useImageViewer = (initialScale = 1) => {
  const [state, setState] = useState<ImageViewerState>({
    scale: initialScale,
    rotation: 0,
    position: { x: 0, y: 0 }
  });
  
  const [isDragging, setIsDragging] = useState(false);
  const startPosRef = useRef<Position>({ x: 0, y: 0 });
  const dragStartRef = useRef<Position>({ x: 0, y: 0 });

  const resetView = useCallback(() => {
    setState({
      scale: initialScale,
      rotation: 0,
      position: { x: 0, y: 0 }
    });
  }, [initialScale]);

  const handleZoom = useCallback((delta: number) => {
    setState(prev => ({
      ...prev,
      scale: Math.max(0.1, Math.min(5, prev.scale + delta))
    }));
  }, []);

  const handleRotate = useCallback((degrees: number) => {
    setState(prev => ({
      ...prev,
      rotation: (prev.rotation + degrees) % 360
    }));
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    startPosRef.current = state.position;
  }, [state.position]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;
    
    setState(prev => ({
      ...prev,
      position: {
        x: startPosRef.current.x + deltaX,
        y: startPosRef.current.y + deltaY
      }
    }));
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
        const delta = e.deltaY * -0.01;
        handleZoom(delta);
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, [handleZoom]);

  return {
    state,
    isDragging,
    handlers: {
      handleZoom,
      handleRotate,
      handleMouseDown,
      handleMouseMove,
      handleMouseUp,
      resetView
    }
  };
};