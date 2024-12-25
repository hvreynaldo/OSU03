import { FC } from 'react';
import Section from './ui/Section';
import MissionHeader from './mission/MissionHeader';
import CallToAction from './mission/CallToAction';

const Mission: FC = () => (
  <Section id="mission" background="gray">
    <div className="max-w-4xl mx-auto">
      <MissionHeader />
      <CallToAction />
    </div>
  </Section>
);

export default Mission;