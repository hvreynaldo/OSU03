import { FC } from 'react';
import NavLink from './NavLink';
import { NAVIGATION_LINKS } from '../../utils/constants';

const NavLinks: FC = () => (
  <div className="hidden md:flex items-center space-x-8">
    {NAVIGATION_LINKS.map((link) => (
      <NavLink key={link.href} href={link.href}>
        {link.label}
      </NavLink>
    ))}
  </div>
);

export default NavLinks;