import { FC } from 'react';
import SubsectionCard from './SubsectionCard';
import { AI_SUBSECTIONS } from '../../utils/constants';

const SubsectionsGrid: FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {AI_SUBSECTIONS.map((subsection) => (
      <SubsectionCard key={subsection.id} {...subsection} />
    ))}
  </div>
);

export default SubsectionsGrid;