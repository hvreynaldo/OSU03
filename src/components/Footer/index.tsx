import { FC } from 'react';
import FooterBranding from './FooterBranding';
import FooterAddress from './FooterAddress';
import FooterImage from './FooterImage';
import FooterCopyright from './FooterCopyright';

const Footer: FC = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Left Column - Branding */}
        <FooterBranding />

        {/* Center Column - Address */}
        <FooterAddress />

        {/* Right Column - Image */}
        <FooterImage />
      </div>

      {/* Copyright */}
      <FooterCopyright />
    </div>
  </footer>
);

export default Footer;