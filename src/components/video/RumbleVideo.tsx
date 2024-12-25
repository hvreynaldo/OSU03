import { FC } from 'react';
import Section from '../ui/Section';
import VimeoPlayer from './VimeoPlayer';

const RumbleVideo: FC = () => (
  <Section 
    className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white"
  >
    <div className="max-w-4xl mx-auto">
      <VimeoPlayer />
    </div>
  </Section>
);

export default RumbleVideo;