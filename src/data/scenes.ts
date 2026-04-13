import type { Scene } from '../types';

export const ROLE_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  who:       { bg: '#FFCC80', text: '#4a2800', label: 'Who' },
  doing:     { bg: '#FFF59D', text: '#3a3000', label: 'What doing' },
  what:      { bg: '#C5E1A5', text: '#1a3300', label: 'What' },
  where:     { bg: '#90CAF9', text: '#0a2040', label: 'Where' },
  adjective: { bg: '#CE93D8', text: '#2a003a', label: 'Describe' },
};

export const scenes: Scene[] = [
  {
    id: 'scene-1',
    imageUrl: '/images/cat.jpg',
    imageAlt: 'A cat chasing a tiny mouse in the garden',
    words: [
      { id: 's1-0', text: 'The cat',      role: 'who',       correctIndex: 0 },
      { id: 's1-1', text: 'chases',       role: 'doing',     correctIndex: 1 },
      { id: 's1-2', text: 'tiny',         role: 'adjective', correctIndex: 2 },
      { id: 's1-3', text: 'a mouse',      role: 'what',      correctIndex: 3 },
      { id: 's1-4', text: 'in the garden', role: 'where',    correctIndex: 4 },
    ],
  },
  {
    id: 'scene-2',
    imageUrl: '/images/dog.jpg',
    imageAlt: 'A dog fetching a red ball at the park',
    words: [
      { id: 's2-0', text: 'The dog',    role: 'who',       correctIndex: 0 },
      { id: 's2-1', text: 'fetches',    role: 'doing',     correctIndex: 1 },
      { id: 's2-2', text: 'red',        role: 'adjective', correctIndex: 2 },
      { id: 's2-3', text: 'a ball',     role: 'what',      correctIndex: 3 },
      { id: 's2-4', text: 'at the park', role: 'where',    correctIndex: 4 },
    ],
  },
  {
    id: 'scene-3',
    imageUrl: '/images/girl-apple.jpg',
    imageAlt: 'A girl eating a big apple at the table',
    words: [
      { id: 's3-0', text: 'The girl',    role: 'who',       correctIndex: 0 },
      { id: 's3-1', text: 'eats',        role: 'doing',     correctIndex: 1 },
      { id: 's3-2', text: 'big',         role: 'adjective', correctIndex: 2 },
      { id: 's3-3', text: 'an apple',    role: 'what',      correctIndex: 3 },
      { id: 's3-4', text: 'at the table', role: 'where',    correctIndex: 4 },
    ],
  },
];
