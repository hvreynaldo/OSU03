import { FC } from 'react';
import ImageContainer from './components/ImageContainer';
import ResponsiveImage from './components/ResponsiveImage';
import VideoPlayer from './VideoPlayer';

interface ArtworkMediaProps {
  type: 'image' | 'video';
  imageUrl?: string;
  videoUrl?: string;
  title: string;
}

const ArtworkMedia: FC<ArtworkMediaProps> = ({ type, imageUrl, videoUrl, title }) => {
  if (type === 'video' && videoUrl) {
    return (
      <ImageContainer>
        <VideoPlayer url={videoUrl} title={title} />
      </ImageContainer>
    );
  }

  return (
    <ImageContainer>
      <ResponsiveImage
        src={imageUrl || ''}
        alt={title}
      />
    </ImageContainer>
  );
};

export default ArtworkMedia;