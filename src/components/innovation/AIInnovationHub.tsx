import { FC } from 'react';
import Section from '../ui/Section';
import HubHeader from './HubHeader';
import StatisticsGrid from './StatisticsGrid';
import SubsectionsGrid from './SubsectionsGrid';

const AIInnovationHub: FC = () => (
  <Section 
    id="innovation-hub" 
    className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white"
  >
    <div className="max-w-7xl mx-auto">
      <HubHeader />
      <StatisticsGrid />
      <SubsectionsGrid />
    </div>
  </Section>
);

export default AIInnovationHub;