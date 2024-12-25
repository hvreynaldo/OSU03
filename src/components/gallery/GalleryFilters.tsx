import { FC } from 'react';
import { ARTWORK_FILTERS } from '../../utils/constants';
import { useGallery } from './GalleryContext';
import { cn } from '../../utils/classNames';

const GalleryFilters: FC = () => {
  const { activeFilter, setActiveFilter } = useGallery();

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {ARTWORK_FILTERS.map(filter => (
        <button
          key={filter.value}
          onClick={() => setActiveFilter(filter.value)}
          className={cn(
            'px-6 py-2 rounded-full transition-colors cursor-pointer',
            activeFilter === filter.value
              ? 'bg-[#FF6600] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilters;