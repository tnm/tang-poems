import React from 'react';
import { useCharacter } from '../context/CharacterContext';
import ToggleSwitch from './ToggleSwitch';

export default function CharacterToggle() {
  const { variant, toggleVariant } = useCharacter();
  
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">繁</span>
      <ToggleSwitch
        checked={variant === 'simplified'}
        onChange={toggleVariant}
        aria-label="Toggle between traditional and simplified characters"
      />
      <span className="text-sm">简</span>
    </div>
  );
}
