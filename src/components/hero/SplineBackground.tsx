import { FC, useEffect, useRef } from 'react';

const SplineBackground: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadSpline = async () => {
      // Load Spline viewer script
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js';
      document.head.appendChild(script);

      // Create and append Spline viewer
      const viewer = document.createElement('spline-viewer');
      viewer.setAttribute('url', 'https://prod.spline.design/6xBD6NKfXt0JioNh/scene.splinecode');
      viewer.style.width = '100%';
      viewer.style.height = '100%';
      viewer.style.position = 'absolute';
      viewer.style.top = '0';
      viewer.style.left = '0';
      viewer.style.pointerEvents = 'none'; // Allow clicking through to content

      if (containerRef.current) {
        containerRef.current.appendChild(viewer);
      }
    };

    loadSpline();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10" /> {/* Reduced opacity from 50% to 20% */}
    </div>
  );
};

export default SplineBackground;