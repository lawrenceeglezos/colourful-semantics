import { Scene } from '../types';

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
      { id: 's1-0', text: 'The',    role: 'who',   correctIndex: 0 },
      { id: 's1-1', text: 'cat',    role: 'who',   correctIndex: 1 },
      { id: 's1-2', text: 'chases', role: 'doing', correctIndex: 2 },
      { id: 's1-3', text: 'a',      role: 'what',  correctIndex: 3 },
      { id: 's1-4', text: 'mouse',  role: 'what',  correctIndex: 4 },
    ],
  },
  {
    id: 'scene-2',
    imageUrl: '/images/dog.jpg',
    imageAlt: 'A dog with a ball',
    words: [
      { id: 's2-0', text: 'The',     role: 'who',   correctIndex: 0 },
      { id: 's2-1', text: 'dog',     role: 'who',   correctIndex: 1 },
      { id: 's2-2', text: 'fetches', role: 'doing', correctIndex: 2 },
      { id: 's2-3', text: 'a',       role: 'what',  correctIndex: 3 },
      { id: 's2-4', text: 'ball',    role: 'what',  correctIndex: 4 },
    ],
  },
  {
    id: 'scene-3',
    imageUrl: '/images/girl-apple.jpg',
    imageAlt: 'A girl eating an apple',
    words: [
      { id: 's3-0', text: 'The',   role: 'who',   correctIndex: 0 },
      { id: 's3-1', text: 'girl',  role: 'who',   correctIndex: 1 },
      { id: 's3-2', text: 'eats',  role: 'doing', correctIndex: 2 },
      { id: 's3-3', text: 'an',    role: 'what',  correctIndex: 3 },
      { id: 's3-4', text: 'apple', role: 'what',  correctIndex: 4 },
    ],
  },
];
