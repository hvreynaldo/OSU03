import { FC } from 'react';
import HostTitle from './HostTitle';
import HostImage from './HostImage';
import EpicDescription from './EpicDescription';

const HostProfile: FC = () => (
  <div className="text-center">
    <HostTitle />
    <HostImage />
    <EpicDescription />
  </div>
);

export default HostProfile;