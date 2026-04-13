import type { Scene } from '../types';

export const ROLE_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  who:   { bg: '#FFD700', text: '#1a1a1a', label: 'Who' },
  doing: { bg: '#E65100', text: '#ffffff', label: 'What doing' },
  what:  { bg: '#1B5E20', text: '#ffffff', label: 'What' },
  where: { bg: '#0D47A1', text: '#ffffff', label: 'Where' },
};

export const scenes: Scene[] = [
  {
    id: 'scene-1',
    imageUrl: '/images/cat.jpg',
    imageAlt: 'A cat',
    words: [
      { id: 's1-0', text: 'The cat',  role: 'who',   correctIndex: 0 },
      { id: 's1-1', text: 'chases',   role: 'doing', correctIndex: 1 },
      { id: 's1-2', text: 'a mouse',  role: 'what',  correctIndex: 2 },
    ],
  },
  {
    id: 'scene-2',
    imageUrl: '/images/dog.jpg',
    imageAlt: 'A dog with a ball',
    words: [
      { id: 's2-0', text: 'The dog',  role: 'who',   correctIndex: 0 },
      { id: 's2-1', text: 'fetches',  role: 'doing', correctIndex: 1 },
      { id: 's2-2', text: 'a ball',   role: 'what',  correctIndex: 2 },
    ],
  },
  {
    id: 'scene-3',
    imageUrl: '/images/girl-apple.jpg',
    imageAlt: 'A girl eating an apple',
    words: [
      { id: 's3-0', text: 'The girl', role: 'who',   correctIndex: 0 },
      { id: 's3-1', text: 'eats',     role: 'doing', correctIndex: 1 },
      { id: 's3-2', text: 'an apple', role: 'what',  correctIndex: 2 },
    ],
  },
];
