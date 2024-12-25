import { FC } from 'react';
import { Menu } from 'lucide-react';

interface HamburgerButtonProps {
  onClick: () => void;
}

const HamburgerButton: FC<HamburgerButtonProps> = ({ onClick }) => (
  <button 
    className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#FF6600] transition-colors"
    onClick={onClick}
    aria-label="Toggle menu"
  >
    <Menu className="h-5 w-5" />
  </button>
);

export default HamburgerButton;