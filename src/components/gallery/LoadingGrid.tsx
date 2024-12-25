import { FC } from 'react';

const LoadingGrid: FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="bg-gray-100 rounded-lg overflow-hidden animate-pulse"
      >
        <div className="h-64 bg-gray-200" />
        <div className="p-6 space-y-4">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-4 bg-gray-200 rounded w-full" />
        </div>
      </div>
    ))}
  </div>
);

export default LoadingGrid;