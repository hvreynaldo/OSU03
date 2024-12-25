import { FC } from 'react';
import Section from '../ui/Section';
import HostProfile from './HostProfile';

const HostSection: FC = () => (
  <Section id="host">
    <div className="max-w-4xl mx-auto">
      <HostProfile />
    </div>
  </Section>
);

export default HostSection;