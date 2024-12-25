import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  href?: string;
  showArrow?: boolean;
  className?: string;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  href, 
  showArrow = false,
  className = ''
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center px-6 py-3 font-semibold rounded-md transition-colors';
  const variantStyles = {
    primary: 'bg-[#FF6600] text-white hover:bg-[#CC5200]',
    secondary: 'bg-white text-gray-900 hover:bg-gray-100'
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight className="ml-2 h-5 w-5" />}
    </Component>
  );
}