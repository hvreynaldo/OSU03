import { FC, useState } from 'react';
import { ArtworkItem } from '../../utils/types';
import ArtworkMedia from './ArtworkMedia';
import ImageViewer from './ImageViewer';

interface ArtworkCardProps {
  artwork: ArtworkItem;
}

const ArtworkCard: FC<ArtworkCardProps> = ({ artwork }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        {/* Image section - clickable for viewer */}
        <div 
          className="aspect-w-16 aspect-h-9 cursor-pointer"
          onClick={() => artwork.type === 'image' && setIsViewerOpen(true)}
        >
          <ArtworkMedia
            type={artwork.type}
            imageUrl={artwork.imageUrl}
            videoUrl={artwork.videoUrl}
            title={artwork.title}
          />
        </div>

        {/* Content section - clickable for description */}
        <div 
          className="p-6 cursor-pointer"
          onClick={toggleDescription}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
            {artwork.title}
          </h3>
          <p className="text-sm text-[#FF6600] mb-2">
            {artwork.aiModel}
          </p>
          <div className="text-gray-600">
            {isExpanded ? (
              <>
                <p className="mb-2">{artwork.description}</p>
                <button 
                  className="text-[#FF6600] hover:text-[#CC5200] transition-colors text-sm font-medium"
                >
                  Show Less
                </button>
              </>
            ) : (
              <>
                <p className="mb-2 line-clamp-2">{artwork.description}</p>
                <button 
                  className="text-[#FF6600] hover:text-[#CC5200] transition-colors text-sm font-medium"
                >
                  Read More
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {isViewerOpen && artwork.type === 'image' && (
        <ImageViewer
          src={artwork.imageUrl}
          alt={artwork.title}
          onClose={() => setIsViewerOpen(false)}
        />
      )}
    </>
  );
};

export default ArtworkCard;