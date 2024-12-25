import { FC } from 'react';

const Footer: FC = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
        <div className="text-right">
          <address className="not-italic">
            <p className="text-white">1201 S. Innovation Way Drive</p>
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
      </div>
      <div className="border-t border-gray-800 pt-8">
        <p className="text-sm text-center">
          Copyright © {new Date().getFullYear()} MAFM.AI - All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;