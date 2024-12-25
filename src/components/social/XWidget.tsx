import { FC } from 'react';
import Section from '../ui/Section';
import TwitterFeeds from './twitter/TwitterFeeds';
import TwitterHeader from './twitter/TwitterHeader';

const XWidget: FC = () => (
  <Section 
    id="social" 
    className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white"
  >
    <div className="max-w-4xl mx-auto relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:40px_40px]" />
      </div>

      {/* Content */}
      <div className="relative">
        <TwitterHeader />
        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-white/10">
          <TwitterFeeds />
        </div>
      </div>
    </div>
  </Section>
);

export default XWidget;