import { Link } from 'react-router-dom';
import { Poem } from '../types/poem';

interface PoemNavigationProps {
  prevPoem: Poem;
  nextPoem: Poem;
}

export default function PoemNavigation({ prevPoem, nextPoem }: PoemNavigationProps) {
  return (
    <div
      className="navigation-buttons"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '2rem',
        fontSize: '0.95rem',
        color: 'var(--color-text)',
        opacity: 0.7,
        padding: '1rem',
        gap: '1rem',
      }}
    >
      <style>
        {`
          .nav-link {
            transition: opacity 0.2s ease-out, transform 0.2s ease-out;
          }
          .nav-link:hover {
            opacity: 1 !important;
            transform: scale(1.02);
          }
        `}
      </style>
      <Link
        to={`/poem/${prevPoem.id}`}
        className="nav-link"
        style={{
          color: 'inherit',
          textDecoration: 'none',
          opacity: 0.7,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        ← {prevPoem.title.chinese.traditional}
      </Link>
      <Link
        to={`/poem/${nextPoem.id}`}
        className="nav-link"
        style={{
          color: 'inherit',
          textDecoration: 'none',
          opacity: 0.7,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        {nextPoem.title.chinese.traditional} →
      </Link>
    </div>
  );
}
