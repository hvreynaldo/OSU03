import { FC } from 'react';

const TwitterSkeleton: FC = () => (
  <div className="p-6 space-y-6">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="animate-pulse">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-white/10 rounded-full" />
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-white/10 rounded w-1/4" />
            <div className="h-3 bg-white/10 rounded w-1/3" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-white/10 rounded w-full" />
          <div className="h-4 bg-white/10 rounded w-5/6" />
        </div>
        <div className="mt-4 flex space-x-4">
          {[...Array(3)].map((_, j) => (
            <div key={j} className="h-8 bg-white/10 rounded w-16" />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default TwitterSkeleton;