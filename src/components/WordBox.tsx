import { CSSProperties } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Word } from '../types';
import { ROLE_COLORS } from '../data/scenes';

function boxStyle(word: Word, extra?: CSSProperties): CSSProperties {
  const { bg, text } = ROLE_COLORS[word.role];
  return {
    backgroundColor: bg,
    color: text,
    padding: '12px 20px',
    borderRadius: '14px',
    fontSize: '1.4rem',
    fontWeight: 800,
    userSelect: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '72px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
    border: `3px solid rgba(0,0,0,0.15)`,
    touchAction: 'none',
    ...extra,
  };
}

interface Props {
  word: Word;
}

export function WordBox({ word }: Props) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: word.id,
  });

  return (
    <div
      ref={setNodeRef}
      style={boxStyle(word, {
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 0.25 : 1,
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: isDragging ? 1000 : 1,
        position: 'relative',
      })}
      {...listeners}
      {...attributes}
    >
      {word.text}
    </div>
  );
}

// Static version used in DragOverlay
export function WordBoxStatic({ word }: Props) {
  return (
    <div style={boxStyle(word, {
      cursor: 'grabbing',
      boxShadow: '0 10px 24px rgba(0,0,0,0.35)',
      transform: 'scale(1.08)',
    })}>
      {word.text}
    </div>
  );
}
