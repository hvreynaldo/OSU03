import { FC } from 'react';

const FooterAddress: FC = () => (
  <div className="flex justify-center">
    <address className="not-italic text-center">
      <p className="text-white">1201 S. Innovation Way Drive</p>
      <p className="text-white">Suite 210</p>
      <p className="text-white mb-2">
        Stillwater, OK 74074 
        <a 
          href="https://maps.google.com/?q=1201+S.+Innovation+Way+Drive+Stillwater+OK+74074" 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-2 text-[#FF6600] hover:text-white transition-colors"
        >
          (map)
        </a>
      </p>
      <p>
        <a 
          href="tel:+14057446930" 
          className="text-[#FF6600] hover:text-white transition-colors"
        >
          (405) 744-6930
        </a>
        {' | '}
        <a 
          href="/contact" 
          className="text-[#FF6600] hover:text-white transition-colors"
        >
          Contact Us
        </a>
      </p>
    </address>
  </div>
);

export default FooterAddress;