import { FC } from 'react';
import { scrollToSection } from '../../utils/scroll';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: FC<NavLinkProps> = ({ href, children, className = '' }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={`text-gray-700 hover:text-[#FF6600] transition-colors ${className}`}
    >
      {children}
    </a>
  );
};

export default NavLink;