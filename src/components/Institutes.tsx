import { FC } from 'react';
import Container from './ui/Container';
import InstituteGrid from './institutes/InstituteGrid';

const Institutes: FC = () => (
  <section id="institutes" className="py-20 bg-gray-50">
    <Container>
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Key Institutes at The Innovation Foundation
      </h2>
      <InstituteGrid />
    </Container>
  </section>
);

export default Institutes;