import { Poem } from '../types/poem';

interface PoemContentProps {
  poem: Poem;
  showPinyin: boolean;
}

export default function PoemContent({ poem, showPinyin }: PoemContentProps) {
  return (
    <div
      className="poem-container"
      style={{
        padding: '2rem 0',
        width: '100%',
        fontSize: '1.125rem',
        lineHeight: '1.8',
        opacity: 0,
        animation: 'fadeIn 0.3s ease-out forwards',
      }}
    >
      <style>
        {`
          @media (max-width: 768px) {
            .poem-container {
              padding: 2rem 1rem;
            }
            .verses-container {
              padding: 2rem !important;
            }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .verse-container {
            transition: opacity 0.2s ease-out;
          }
          
          .verse-container:hover {
            opacity: 0.8;
          }
        `}
      </style>
      <div
        className="verses-container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem',
          display: 'flex',
          flexDirection: 'row',
          gap: '4rem',
          border: `1px solid var(--color-border)`,
          borderRadius: '2px',
          boxShadow: '0 1px 3px var(--color-border)',
          backgroundColor: 'var(--color-paper)',
        }}
      >
        <div
          className="chinese-verses"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '2.5rem',
          }}
        >
          {poem.verses.map((verse: { chinese: string; pinyin?: string }, index: number) => (
            <div
              key={`chinese-${index}`}
              className="verse-container"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '2rem',
                position: 'relative',
              }}
            >
              <span
                className="verse-chinese"
                style={{
                  fontFamily: 'var(--font-chinese)',
                  fontSize: '1.75rem',
                  minHeight: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  writingMode: 'horizontal-tb',
                }}
              >
                {verse.chinese}
              </span>
              {showPinyin && (
                <span
                  className="verse-pinyin"
                  style={{
                    fontFamily: 'var(--font-pinyin)',
                    fontSize: '0.875rem',
                    color: 'var(--color-ink)',
                    opacity: 0.6,
                    fontWeight: 300,
                    textAlign: 'left',
                    width: '120%',
                    position: 'absolute',
                    top: '3rem',
                    left: 0,
                    whiteSpace: 'nowrap',
                    overflow: 'visible',
                  }}
                >
                  {verse.pinyin}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Center Line */}
        <div
          className="center-divider"
          style={{
            width: '1px',
            alignSelf: 'stretch',
            background: 'var(--color-divider)',
          }}
        />

        {/* English Verses */}
        <div
          className="english-verses"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            alignItems: 'flex-start',
          }}
        >
          {poem.verses.map((verse: { english: string }, index: number) => (
            <div
              key={`english-${index}`}
              className="verse-container"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                textAlign: 'left',
              }}
            >
              <span
                className="verse-english"
                style={{
                  fontSize: '1.25rem',
                  lineHeight: '1.6',
                  fontFamily: 'var(--font-english)',
                  color: 'var(--color-text-secondary)',
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                {verse.english}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
