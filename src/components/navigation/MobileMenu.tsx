import { FC } from 'react';
import NavLink from './NavLink';
import { NAVIGATION_LINKS } from '../../utils/constants';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
        {NAVIGATION_LINKS.map((link) => (
          <NavLink 
            key={link.href} 
            href={link.href}
            className="block px-3 py-2 rounded-md hover:bg-gray-50"
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;