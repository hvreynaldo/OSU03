import { useState } from 'react';
import Logo from './navigation/Logo';
import NavLinks from './navigation/NavLinks';
import MobileMenu from './navigation/MobileMenu';
import HamburgerButton from './navigation/HamburgerButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <NavLinks />

          <div className="flex items-center">
            <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} />
    </nav>
  );
};

export default Navbar;