import { FC } from 'react';
import Section from '../ui/Section';
import ResponsiveVideo from './components/ResponsiveVideo';

const VideoShowcase: FC = () => (
  <Section 
    className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white"
  >
    <div className="max-w-4xl mx-auto">
      <div className="relative rounded-lg overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm">
        <ResponsiveVideo
          src="https://res.cloudinary.com/dsxhbkdlk/image/upload/v1735056770/1224_rwub51.gif"
          type="image/gif"
        />
      </div>
    </div>
  </Section>
);

export default VideoShowcase;