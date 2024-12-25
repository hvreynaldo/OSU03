import { FC } from 'react';
import { Institute } from '../../utils/types';

interface InstituteCardProps {
  institute: Institute;
}

const InstituteCard: FC<InstituteCardProps> = ({ institute }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img 
      src={institute.image} 
      alt={institute.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{institute.name}</h3>
      <p className="text-gray-600">{institute.description}</p>
      <a 
        href={`#${institute.name.toLowerCase().replace(/\s+/g, '-')}`}
        className="mt-4 inline-block text-[#FF6600] hover:text-[#CC5200]"
      >
        Learn more →
      </a>
    </div>
  </div>
);

export default InstituteCard;