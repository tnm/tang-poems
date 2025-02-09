import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '2rem auto',
        padding: '0 2rem',
        fontFamily: 'var(--font-english)',
      }}
    >
      <h1
        style={{
          fontSize: '1.75rem',
          marginBottom: '2rem',
          color: '#1a1a1a',
        }}
      >
        About Tang Poetry Collection
      </h1>

      <div
        style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
        }}
      >
        <section style={{ marginBottom: '2rem' }}>
          <h2
            style={{
              fontSize: '1.25rem',
              marginBottom: '1rem',
              color: '#1a1a1a',
            }}
          >
            About this Collection
          </h2>
          <p
            style={{
              lineHeight: 1.6,
              color: '#1a1a1a',
              opacity: 0.8,
              marginBottom: '1rem',
            }}
          >
            This is a curated collection of Tang Dynasty poems with side-by-side translations in
            Chinese and English. Each poem is carefully selected and translated to preserve both
            meaning and poetic beauty.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2
            style={{
              fontSize: '1.25rem',
              marginBottom: '1rem',
              color: '#1a1a1a',
            }}
          >
            Keyboard Navigation
          </h2>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              color: '#1a1a1a',
              opacity: 0.8,
            }}
          >
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>← Left Arrow:</strong> Navigate to previous poem
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>→ Right Arrow:</strong> Navigate to next poem
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>ESC:</strong> Return to poem collection
            </li>
          </ul>
        </section>

        <section>
          <h2
            style={{
              fontSize: '1.25rem',
              marginBottom: '1rem',
              color: '#1a1a1a',
            }}
          >
            Credits
          </h2>
          <p
            style={{
              lineHeight: 1.6,
              color: '#1a1a1a',
              opacity: 0.8,
              marginBottom: '1rem',
            }}
          >
            Created by{' '}
            <a
              href="https://twitter.com/tnm"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'inherit',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
              }}
            >
              Ted Nyman
            </a>
            . View the source code on{' '}
            <a
              href="https://github.com/tnm/tang-poems"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'inherit',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
              }}
            >
              GitHub
            </a>
            .
          </p>
        </section>
      </div>

      <div
        style={{
          marginTop: '2rem',
          textAlign: 'center',
        }}
      >
        <Link
          to="/"
          style={{
            color: '#1a1a1a',
            textDecoration: 'none',
            opacity: 0.7,
            fontSize: '0.95rem',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
        >
          ← Return to Collection
        </Link>
      </div>
    </div>
  );
}
