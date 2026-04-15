# Colourful Semantics

A web app for the Colourful Semantics language learning framework, aimed at young children. Kids are shown a picture and drag coloured word boxes into a sentence strip in the correct order.

## Tech stack

- **Vite + React + TypeScript**
- **@dnd-kit/core** for drag and drop
- No CSS framework — plain CSS with inline styles in components

## Dev commands

```bash
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build
npm run lint      # lint
```

Node is managed via nvm. If commands fail, run:
```bash
export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh"
```

## Colour/role system

Defined in `src/data/scenes.ts` → `ROLE_COLORS`:

| Role        | Colour        | Hex       | Label      |
|-------------|---------------|-----------|------------|
| `who`       | Pastel orange | `#FFCC80` | Who        |
| `doing`     | Pastel yellow | `#FFF59D` | What doing |
| `adjective` | Pastel purple | `#CE93D8` | Describe   |
| `what`      | Pastel green  | `#C5E1A5` | What       |
| `where`     | Pastel blue   | `#90CAF9` | Where      |

All roles use dark text for contrast on pastel backgrounds.

## Adding a new scene

Edit `src/data/scenes.ts`. Each scene needs:

```ts
{
  id: 'scene-4',
  imageUrl: '/images/your-image.jpg',  // place image in public/images/
  imageAlt: 'Description of image',
  words: [
    { id: 's4-0', text: 'The boy',   role: 'who',       correctIndex: 0 },
    { id: 's4-1', text: 'kicks',     role: 'doing',     correctIndex: 1 },
    { id: 's4-2', text: 'a big',     role: 'adjective', correctIndex: 2 },
    { id: 's4-3', text: 'ball',      role: 'what',      correctIndex: 3 },
    { id: 's4-4', text: 'at school', role: 'where',     correctIndex: 4 },
  ],
}
```

**Sentence order convention:** Who → What doing → Describe (with article) → What (noun only) → Where

This produces grammatically correct left-to-right reading, e.g. "The boy kicks a big ball at school".

## Key files

| File | Purpose |
|------|---------|
| `src/data/scenes.ts` | All scene data and role colour definitions |
| `src/types.ts` | `Role`, `Word`, `Scene` types |
| `src/App.tsx` | DnD context, state management, drag logic |
| `src/components/SentenceStrip.tsx` | Droppable sentence slots |
| `src/components/WordBank.tsx` | Draggable word pool |
| `src/components/WordBox.tsx` | Individual draggable word box |
| `src/components/Feedback.tsx` | Right/wrong overlay |
| `public/images/` | Scene images |
