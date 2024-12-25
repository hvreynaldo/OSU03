import { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray';
}

export default function Section({ 
  children, 
  id, 
  className = '',
  background = 'white'
}: SectionProps) {
  const bgColor = background === 'gray' ? 'bg-gray-50' : 'bg-white';
  
  return (
    <section id={id} className={`py-20 ${bgColor} ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}