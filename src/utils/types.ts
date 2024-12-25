import { LucideIcon } from 'lucide-react';

export interface ArtworkItem {
  id: string;
  title: string;
  aiModel: string;
  description: string;
  imageUrl: string;
  type: 'image' | 'video';
  videoUrl?: string;
}

export interface ArtworkFilter {
  label: string;
  value: string;
}

export interface NavigationLink {
  href: string;
  label: string;
}

export interface AIStatistic {
  id: string;
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

export interface AISubsection {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}