import { createContext, useContext, useState, useRef, ReactNode } from 'react';

interface GalleryContextType {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  scrollToGallery: () => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export const GalleryProvider = ({ children }: { children: ReactNode }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <GalleryContext.Provider 
      value={{ 
        activeFilter, 
        setActiveFilter: handleFilterChange, 
        currentPage, 
        setCurrentPage,
        scrollToGallery 
      }}
    >
      <div ref={galleryRef}>
        {children}
      </div>
    </GalleryContext.Provider>
  );
};

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};