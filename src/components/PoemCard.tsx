import { Link } from 'react-router-dom';
import { Poem } from '../types/poem';
import type { ExtendedCSSProperties } from '../types/styles';
import { useCharacter } from '../context/CharacterContext';

interface PoemCardProps {
  poem: Poem;
}

export default function PoemCard({ poem }: PoemCardProps) {
  const { getText } = useCharacter();

  return (
    <Link
      to={`/poem/${poem.id}`}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
      }}
    >
      <div
        style={
          {
            padding: '1rem',
            backgroundColor: 'var(--color-paper)',
            borderRadius: '8px',
            border: '1px solid var(--color-border)',
            transition: 'all 0.2s ease-out',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            cursor: 'pointer',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px var(--color-border)',
            },
          } as ExtendedCSSProperties
        }
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          <div style={{ fontSize: '1.125rem' }}>{getText(poem.title.chinese)}</div>
          <div style={{ fontSize: '0.875rem', opacity: 0.7 }}>{poem.title.english}</div>
        </div>

        <div
          style={{
            fontSize: '0.875rem',
            opacity: 0.7,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span>{getText(poem.author.chinese)}</span>
          <span>·</span>
          <span>{poem.author.english}</span>
        </div>
      </div>
    </Link>
  );
}
