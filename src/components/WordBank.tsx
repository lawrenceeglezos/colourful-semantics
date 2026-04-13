import { useDroppable } from '@dnd-kit/core';
import type { Word } from '../types';
import { WordBox } from './WordBox';

interface Props {
  words: Word[];
}

export function WordBank({ words }: Props) {
  const { setNodeRef, isOver } = useDroppable({ id: 'bank' });

  return (
    <div
      ref={setNodeRef}
      style={{
        background: isOver ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.12)',
        borderRadius: '20px',
        padding: '24px',
        border: '2.5px dashed rgba(255,255,255,0.45)',
        minHeight: '96px',
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background 0.15s',
      }}
    >
      {words.length === 0 ? (
        <p style={{ color: 'rgba(255,255,255,0.55)', fontStyle: 'italic', margin: 0 }}>
          All words placed!
        </p>
      ) : (
        words.map(word => <WordBox key={word.id} word={word} />)
      )}
    </div>
  );
}
