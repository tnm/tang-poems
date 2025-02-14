import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import CharacterToggle from './CharacterToggle';

export default function SiteHeader() {
  return (
    <header
      style={{
        backgroundColor: 'var(--color-paper)',
        borderBottom: '1px solid var(--color-border)',
        padding: '0.5rem 0',
        width: '100%',
        marginBottom: 0,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: '1.25rem',
            fontWeight: 500,
            textDecoration: 'none',
            opacity: 1,
            color: 'var(--color-text)',
          }}
        >
          Tang Poetry Collection
        </Link>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <CharacterToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
