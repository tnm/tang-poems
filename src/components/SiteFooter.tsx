import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-paper)',
        padding: '2rem',
        marginTop: '2rem',
        borderTop: '1px solid var(--color-border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <Link
          to="/about"
          style={{
            color: 'var(--color-text)',
            textDecoration: 'none',
            opacity: 0.7,
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
        >
          About
        </Link>
        <span style={{ opacity: 0.7 }}>A collection of Tang dynasty poems with translations</span>
      </div>
      <div style={{ fontSize: '0.875rem', color: 'var(--color-text)', opacity: 0.6 }}>
        Created by{' '}
        <a
          href="https://twitter.com/tnm"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'inherit',
            textDecoration: 'underline',
            textDecorationStyle: 'dotted',
          }}
        >
          tnm
        </a>
      </div>
    </footer>
  );
}
