import { useState, useEffect } from 'react';
import { Poem } from '../types/poem';
import { useCharacter } from '../context/CharacterContext';

interface PoemContentProps {
  poem: Poem;
  showPinyin: boolean;
}

export default function PoemContent({ poem, showPinyin }: PoemContentProps) {
  const { getText } = useCharacter();
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <div style={{ 
      padding: '2rem', 
      width: '100%',
      backgroundColor: 'var(--color-paper)',
      border: '1px solid var(--color-border)',
      borderRadius: '8px',
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        gap: isMobile ? '3.5rem' : '4rem'
      }}>
        {/* Chinese Text Column */}
        <div style={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          alignItems: 'flex-start',
        }}>
          {poem.verses.map((verse, index) => (
            <div
              key={`chinese-${index}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-chinese)',
                fontSize: '1.75rem',
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
                {getText(verse.chinese)}
              </span>
              {showPinyin && verse.chinese.pinyin && (
                <span style={{
                  fontFamily: 'var(--font-pinyin)',
                  fontSize: '0.875rem',
                  color: 'var(--color-ink)',
                  opacity: 0.6,
                  fontWeight: 300,
                  position: 'absolute',
                  top: '3rem',
                  left: 0,
                  whiteSpace: 'nowrap',
                }}>
                  {verse.chinese.pinyin}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Divider Line */}
        <div style={{
          width: isMobile ? '100%' : '1px',
          height: isMobile ? '1px' : 'auto',
          backgroundColor: 'var(--color-ink)',
          opacity: 0.1,
          alignSelf: 'stretch',
        }} />

        {/* English Text Column */}
        <div style={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          alignItems: 'flex-start',
        }}>
          {poem.verses.map((verse, index) => (
            <div
              key={`english-${index}`}
              style={{
                fontSize: '1.25rem',
                lineHeight: '1.75',
                color: 'var(--color-text)',
                opacity: 0.85,
                minHeight: showPinyin ? '4rem' : '2.5rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {verse.english}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
