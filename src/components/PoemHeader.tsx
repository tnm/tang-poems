import { Poem } from '../types/poem';
import ToggleSwitch from './ToggleSwitch';
import { useCharacter } from '../context/CharacterContext';

interface PoemHeaderProps {
  poem: Poem;
  showPinyin: boolean;
  setShowPinyin: (show: boolean) => void;
}

export default function PoemHeader({ poem, showPinyin, setShowPinyin }: PoemHeaderProps) {
  const { getText } = useCharacter();

  return (
    <div
      className="poem-header"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        marginBottom: '2rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        <span
          className="chinese-title"
          style={{
            fontSize: '1.5rem',
            color: 'var(--color-text)',
          }}
        >
          {getText(poem.title.chinese)}
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
        <ToggleSwitch checked={showPinyin} onChange={setShowPinyin} label="Pinyin" />
        <div style={{ fontSize: '0.95rem', color: 'var(--color-text)', opacity: 0.7 }}>
          <span>{getText(poem.author.chinese)}</span>
          <span style={{ margin: '0 0.5rem' }}>·</span>
          <span>{poem.author.english}</span>
          <span style={{ margin: '0 0.5rem' }}>·</span>
          <span style={{ fontStyle: 'italic' }}>{poem.form ? getText(poem.form) : poem.formEnglish}</span>
        </div>
      </div>
    </div>
  );
}
