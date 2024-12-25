import { FC } from 'react';
import Section from '../ui/Section';
import { GalleryProvider } from './GalleryContext';
import GalleryHeader from './GalleryHeader';
import GalleryFilters from './GalleryFilters';
import GalleryGrid from './GalleryGrid';

const AIGallery: FC = () => (
  <Section id="gallery" background="white">
    <GalleryProvider>
      <div className="max-w-7xl mx-auto">
        <GalleryHeader />
        <GalleryFilters />
        <GalleryGrid />
      </div>
    </GalleryProvider>
  </Section>
);

export default AIGallery;