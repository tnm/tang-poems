import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { poems } from '../data/poems';
import PoemHeader from './PoemHeader';
import PoemContent from './PoemContent';
import PoemNavigation from './PoemNavigation';

export default function PoemView() {
  const { poemId } = useParams();
  const navigate = useNavigate();
  const currentIndex = poemId ? poems.findIndex(p => p.id === poemId) : -1;
  const poem = currentIndex !== -1 ? poems[currentIndex] : null;

  const [showPinyin, setShowPinyin] = useState(false);

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

  const prevIndex = currentIndex > 0 ? currentIndex - 1 : poems.length - 1;
  const nextIndex = currentIndex < poems.length - 1 ? currentIndex + 1 : 0;

  return (
    <div
      className="poem-view-container"
      style={{
        maxWidth: '1200px',
        margin: '2rem auto',
        padding: '0 2rem',
        fontFamily: 'var(--font-english)',
      }}
    >
      <style>
        {`
          @media (max-width: 768px) {
            .poem-view-container {
              padding: 0 !important;
            }
          }
        `}
      </style>
      <PoemHeader poem={poem} showPinyin={showPinyin} setShowPinyin={setShowPinyin} />
      <PoemContent poem={poem} showPinyin={showPinyin} />
      <PoemNavigation prevPoem={poems[prevIndex]} nextPoem={poems[nextIndex]} />
    </div>
  );
}
