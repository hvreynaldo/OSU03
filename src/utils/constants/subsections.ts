import { Brain, Palette, Mic, Video, Cog, Cpu } from 'lucide-react';
import { AISubsection } from '../types';

export const AI_SUBSECTIONS: AISubsection[] = [
  {
    id: 'prompt-engineering',
    title: 'AI Prompt Engineering',
    description: 'Crafting precise instructions to generate optimal AI outputs across various applications and use cases.',
    icon: Brain
  },
  {
    id: 'art-generation',
    title: 'AI Art Generation',
    description: 'Creating stunning visual content using state-of-the-art AI models and creative algorithms.',
    icon: Palette
  },
  {
    id: 'voice-synthesis',
    title: 'AI Voice Synthesis',
    description: 'Developing natural-sounding voice applications for enhanced human-computer interaction.',
    icon: Mic
  },
  {
    id: 'video-production',
    title: 'AI Video Production',
    description: 'Generating and editing professional video content using advanced AI algorithms and automation.',
    icon: Video
  },
  {
    id: 'automation',
    title: 'AI Automation',
    description: 'Streamlining workflows and processes through intelligent automation and machine learning.',
    icon: Cog
  },
  {
    id: 'emerging-tech',
    title: 'Emerging AI Technologies',
    description: 'Exploring and implementing cutting-edge AI innovations to solve complex challenges.',
    icon: Cpu
  }
];