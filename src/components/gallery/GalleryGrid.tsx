import { FC } from 'react';
import { GALLERY_ITEMS } from '../../utils/constants';
import { useGallery } from './GalleryContext';
import ArtworkCard from './ArtworkCard';
import LoadingGrid from './LoadingGrid';
import ErrorBoundary from '../ui/ErrorBoundary';
import Pagination from './Pagination';

const ITEMS_PER_PAGE = 12;

const GalleryGrid: FC = () => {
  const { activeFilter, currentPage, setCurrentPage, scrollToGallery } = useGallery();

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (activeFilter === 'all') return true;
    
    if (activeFilter === 'video-ai') {
      return item.type === 'video';
    }
    
    const normalizedModel = item.aiModel.toLowerCase().replace(/\s+/g, '-');
    return normalizedModel === activeFilter;
  });

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToGallery();
  };

  return (
    <ErrorBoundary>
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {paginatedItems.map(item => (
            <ArtworkCard key={item.id} artwork={item} />
          ))}
        </div>
        
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </ErrorBoundary>
  );
};

export default GalleryGrid;