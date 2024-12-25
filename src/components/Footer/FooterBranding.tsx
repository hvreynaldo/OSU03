import { FC } from 'react';

const FooterBranding: FC = () => (
  <div>
    <h2 className="text-[#FF6600] text-2xl font-bold mb-4">
      THE INNOVATION FOUNDATION AT OSU
    </h2>
    <p className="text-gray-400 italic mb-2">Part of</p>
    <a 
      href="https://okstate.edu" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white hover:text-[#FF6600] transition-colors"
    >
      Oklahoma State University
    </a>
  </div>
);

export default FooterBranding;