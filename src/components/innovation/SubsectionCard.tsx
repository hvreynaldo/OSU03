import { FC } from 'react';
import { LucideIcon } from 'lucide-react';

interface SubsectionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const SubsectionCard: FC<SubsectionCardProps> = ({ title, description, icon: Icon }) => (
  <div className="group bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer">
    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-8 h-8 text-blue-400" />
    </div>
    <h3 className="font-mono text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
);

export default SubsectionCard;