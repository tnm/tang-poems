import { ExtendedCSSProperties } from '../types/styles';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

function ToggleSwitch({ checked, onChange, label }: ToggleSwitchProps) {
  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      <span
        style={{
          fontSize: '0.875rem',
          color: 'var(--color-ink)',
          opacity: 0.8,
        }}
      >
        {label}
      </span>
      <div
        style={{
          position: 'relative',
          width: '36px',
          height: '20px',
          '@media (max-width: 600px)': {
            width: '48px',
            height: '24px',
          } as ExtendedCSSProperties,
        }}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          style={{
            position: 'absolute',
            opacity: 0,
            width: 0,
            height: 0,
          }}
        />
        <span
          style={
            {
              position: 'absolute',
              cursor: 'pointer',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: checked ? 'var(--color-accent)' : '#ccc',
              transition: '.3s',
              borderRadius: '34px',
              '@media (max-width: 600px)': {
                borderRadius: '40px',
              },
              '&:before': {
                content: '""',
                position: 'absolute',
                height: '16px',
                width: '16px',
                left: checked ? '2px' : '2px',
                bottom: '2px',
                backgroundColor: 'white',
                transition: '.3s',
                borderRadius: '50%',
                transform: checked ? 'translateX(16px)' : 'translateX(0)',
                '@media (max-width: 600px)': {
                  height: '20px',
                  width: '20px',
                  transform: checked ? 'translateX(24px)' : 'translateX(0)',
                },
              },
            } as ExtendedCSSProperties
          }
        />
      </div>
    </label>
  );
}

export default ToggleSwitch;
