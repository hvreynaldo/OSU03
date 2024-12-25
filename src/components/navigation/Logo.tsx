import { FC } from 'react';
import { BRANDING } from '../../utils/constants/branding';

const Logo: FC = () => (
  <a 
    href={BRANDING.OSU.WEBSITE_URL}
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex-shrink-0"
  >
    <img 
      src={BRANDING.OSU.LOGO_URL} 
      alt={BRANDING.OSU.ALT_TEXT} 
      className="h-8" 
    />
  </a>
);

export default Logo;