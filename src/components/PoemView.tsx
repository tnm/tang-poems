import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { poems } from '../data/poems';
import PoemContent from './PoemContent';
import { useCharacter } from '../context/CharacterContext';
import ToggleSwitch from './ToggleSwitch';

export default function PoemView() {
  const { poemId } = useParams();
  const navigate = useNavigate();
  const { getText } = useCharacter();
  const currentIndex = poemId ? poems.findIndex(p => p.id === poemId) : -1;
  const poem = currentIndex !== -1 ? poems[currentIndex] : null;
  const [showPinyin, setShowPinyin] = useState(false);
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : poems.length - 1;
        navigate(`/poem/${poems[prevIndex].id}`);
      } else if (event.key === 'ArrowRight') {
        const nextIndex = currentIndex < poems.length - 1 ? currentIndex + 1 : 0;
        navigate(`/poem/${poems[nextIndex].id}`);
      } else if (event.key === 'Escape') {
        navigate('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, navigate]);

  if (!poem) {
    return <div>Poem not found</div>;
  }

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '2rem auto', 
      padding: isMobile ? '0 0.5rem' : '0 2rem'
    }}>
      <div style={{ 
        marginBottom: '2rem',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: isMobile ? '1rem' : 0,
        padding: '0.75rem 0',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '1rem',
          flexWrap: 'wrap',
        }}>
          <span style={{ 
            fontFamily: 'var(--font-chinese)',
            fontSize: '1.5rem',
          }}>
            {getText(poem.title.chinese)}
          </span>
          <span style={{ 
            fontSize: '1.35rem',
            opacity: 0.85,
            fontStyle: 'italic',
          }}>
            {poem.title.english}
          </span>
        </div>

        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.95rem',
          opacity: 0.7,
          flexWrap: 'wrap',
        }}>
          <ToggleSwitch
            checked={showPinyin}
            onChange={setShowPinyin}
            label="Pinyin"
          />
          <span style={{ fontFamily: 'var(--font-chinese)' }}>
            {getText(poem.author.chinese)}
          </span>
          <span>{poem.author.english}</span>
          {!isMobile && (
            <>
              <span style={{ margin: '0 0.5rem' }}>·</span>
              <span>{poem.form ? getText(poem.form) : poem.formEnglish}</span>
            </>
          )}
        </div>
      </div>
      <PoemContent poem={poem} showPinyin={showPinyin} />
    </div>
  );
}
