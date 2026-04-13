import { useDroppable } from '@dnd-kit/core';
import type { Scene, Word } from '../types';
import { ROLE_COLORS } from '../data/scenes';

interface SlotProps {
  index: number;
  role: string;
  word: Word | null;
}

function Slot({ index, role, word }: SlotProps) {
  const { setNodeRef, isOver } = useDroppable({ id: String(index) });
  const { bg, text, label } = ROLE_COLORS[role];

  return (
    <div
      ref={setNodeRef}
      style={{
        minWidth: '130px',
        height: '68px',
        backgroundColor: word ? bg : `${bg}30`,
        border: `3px solid ${bg}`,
        borderRadius: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: word ? '1.4rem' : '0.75rem',
        fontWeight: word ? 800 : 700,
        color: text,
        outline: isOver ? '3px solid white' : 'none',
        outlineOffset: '3px',
        boxShadow: isOver ? `0 0 0 6px ${bg}55` : 'none',
        transition: 'box-shadow 0.15s, background-color 0.15s',
        padding: '0 12px',
        letterSpacing: word ? '0.01em' : '0.04em',
        textTransform: word ? 'none' : 'uppercase',
      }}
    >
      {word ? word.text : label}
    </div>
  );
}

interface Props {
  scene: Scene;
  slotContents: (string | null)[];
}

export function SentenceStrip({ scene, slotContents }: Props) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      padding: '20px 24px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
    }}>
      <p style={{
        fontSize: '0.8rem',
        fontWeight: 700,
        color: '#888',
        marginBottom: '16px',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        textAlign: 'left',
      }}>
        Build the sentence
      </p>
      <div style={{
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {scene.words.map((word, i) => {
          const placed = slotContents[i]
            ? scene.words.find(w => w.id === slotContents[i]) ?? null
            : null;
          return <Slot key={i} index={i} role={word.role} word={placed} />;
        })}
      </div>
    </div>
  );
}
