interface Props {
  result: 'correct' | 'incorrect';
}

export function Feedback({ result }: Props) {
  const isCorrect = result === 'correct';
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: isCorrect ? 'rgba(0,100,0,0.55)' : 'rgba(180,0,0,0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        background: 'white',
        borderRadius: '28px',
        padding: '48px 72px',
        textAlign: 'center',
        boxShadow: '0 12px 48px rgba(0,0,0,0.3)',
        animation: 'pop 0.25s cubic-bezier(0.34,1.56,0.64,1)',
      }}>
        <div style={{ fontSize: '5rem', lineHeight: 1 }}>
          {isCorrect ? '🎉' : '🤔'}
        </div>
        <div style={{
          fontSize: '2.5rem',
          fontWeight: 900,
          marginTop: '16px',
          color: isCorrect ? '#1B5E20' : '#B71C1C',
        }}>
          {isCorrect ? 'Well done!' : 'Try again!'}
        </div>
      </div>
    </div>
  );
}
