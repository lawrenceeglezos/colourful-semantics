import { useState, useEffect, useCallback } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { scenes } from './data/scenes';
import { Word } from './types';
import { SentenceStrip } from './components/SentenceStrip';
import { WordBank } from './components/WordBank';
import { Feedback } from './components/Feedback';
import { WordBoxStatic } from './components/WordBox';
import './App.css';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function App() {
  const [currentScene, setCurrentScene] = useState(0);
  const [slotContents, setSlotContents] = useState<(string | null)[]>([]);
  const [shuffledWords, setShuffledWords] = useState<Word[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [activeWordId, setActiveWordId] = useState<string | null>(null);

  const scene = scenes[currentScene];

  useEffect(() => {
    setShuffledWords(shuffle(scene.words));
    setSlotContents(new Array(scene.words.length).fill(null));
    setFeedback(null);
    setActiveWordId(null);
  }, [currentScene]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
  );

  const bankWords = shuffledWords.filter(w => !slotContents.includes(w.id));
  const activeWord = activeWordId ? scene.words.find(w => w.id === activeWordId) : null;

  const checkAnswer = useCallback((slots: (string | null)[]) => {
    const isCorrect = slots.every((id, i) => {
      const word = scene.words.find(w => w.id === id);
      return word?.correctIndex === i;
    });

    setFeedback(isCorrect ? 'correct' : 'incorrect');

    setTimeout(() => {
      setFeedback(null);
      if (isCorrect) {
        setCurrentScene(prev => (prev + 1) % scenes.length);
      } else {
        setSlotContents(new Array(scene.words.length).fill(null));
        setShuffledWords(prev => shuffle(prev));
      }
    }, 1800);
  }, [scene.words]);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveWordId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const wordId = active.id as string;
    setActiveWordId(null);

    const newSlots = [...slotContents];

    // Remove word from its current slot (if any)
    const currentSlot = newSlots.indexOf(wordId);
    if (currentSlot !== -1) newSlots[currentSlot] = null;

    if (over && over.id !== 'bank') {
      // Place in target slot, displacing any existing word to bank
      const targetIndex = parseInt(over.id as string);
      newSlots[targetIndex] = wordId;
    }

    setSlotContents(newSlots);

    if (newSlots.every(id => id !== null)) {
      checkAnswer(newSlots);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Colourful Semantics</h1>
        <div className="scene-dots">
          {scenes.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentScene ? 'active' : i < currentScene ? 'done' : ''}`}
            />
          ))}
        </div>
      </header>

      <main className="app-main">
        <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="scene-image-wrapper">
            <img src={scene.imageUrl} alt={scene.imageAlt} className="scene-image" />
          </div>

          <SentenceStrip scene={scene} slotContents={slotContents} />

          <WordBank words={bankWords} />

          <DragOverlay dropAnimation={null}>
            {activeWord ? <WordBoxStatic word={activeWord} /> : null}
          </DragOverlay>
        </DndContext>
      </main>

      {feedback && <Feedback result={feedback} />}
    </div>
  );
}
