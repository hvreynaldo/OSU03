import { FC } from 'react';

const FooterCopyright: FC = () => (
  <div className="border-t border-gray-800 pt-8">
    <p className="text-sm text-center">
      Copyright © {new Date().getFullYear()} MAFM.AI - All Rights Reserved
    </p>
  </div>
);

export default FooterCopyright;