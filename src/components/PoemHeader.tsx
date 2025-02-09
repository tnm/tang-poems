import { Poem } from '../types/poem';
import ToggleSwitch from './ToggleSwitch';

interface PoemHeaderProps {
  poem: Poem;
  showPinyin: boolean;
  setShowPinyin: (show: boolean) => void;
}

export default function PoemHeader({ poem, showPinyin, setShowPinyin }: PoemHeaderProps) {
  return (
    <div
      className="poem-header"
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--color-exterior)',
        padding: '0.75rem 0',
        width: '100%',
        marginBottom: '2rem',
      }}
    >
      <div
        className="poem-meta"
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: '2rem',
        }}
      >
        <div
          className="flex-container flex-mobile-column poem-title-container"
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '1rem',
          }}
        >
          <span
            className="chinese-title"
            style={{
              fontSize: '1.5rem',
              color: 'var(--color-text)',
            }}
          >
            {poem.title.chinese}
          </span>
          <span
            className="english-title"
            style={{
              fontSize: '1.35rem',
              opacity: 0.85,
              fontStyle: 'italic',
            }}
          >
            {poem.title.english}
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <ToggleSwitch checked={showPinyin} onChange={setShowPinyin} label="Show Pinyin" />
          <div style={{ fontSize: '0.95rem', color: 'var(--color-text)', opacity: 0.7 }}>
            <span>{poem.author.english}</span>
            <span style={{ margin: '0 0.5rem' }}>·</span>
            <span style={{ fontStyle: 'italic' }}>{poem.formEnglish}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
