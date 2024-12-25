import { FC } from 'react';
import Section from '../ui/Section';
import { PARTNER_LOGOS } from '../../utils/constants/partners';

const PartnerLogos: FC = () => (
  <Section background="white">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {PARTNER_LOGOS.map((logo, index) => (
          <div 
            key={index} 
            className="w-full sm:w-1/3 md:w-1/4 max-w-[200px] px-4"
          >
            <img
              src={logo.url}
              alt={logo.alt}
              className="w-full h-32 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default PartnerLogos;