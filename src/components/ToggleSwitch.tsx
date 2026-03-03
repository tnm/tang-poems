interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  ariaLabel?: string;
}

function ToggleSwitch({ checked, onChange, label, ariaLabel }: ToggleSwitchProps) {
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
      {label && (
        <span
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-ink)',
            opacity: 0.8,
          }}
        >
          {label}
        </span>
      )}
      <div
        style={{
          position: 'relative',
          width: '36px',
          height: '20px',
        }}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          aria-label={ariaLabel || label || 'Toggle setting'}
          style={{
            position: 'absolute',
            opacity: 0,
            width: 0,
            height: 0,
          }}
        />
        <span
          style={{
            position: 'absolute',
            cursor: 'pointer',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: checked ? 'var(--color-accent)' : '#ccc',
            transition: '.2s',
            borderRadius: '34px',
          }}
        />
      </div>
    </label>
  );
}

export default ToggleSwitch;
