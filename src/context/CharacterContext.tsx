import React, { useState } from 'react';
import { CharacterContext } from './character-context';
import type { CharacterVariant } from './character-context';
import type { ChineseText } from '../types/poem';

export function CharacterProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState<CharacterVariant>('traditional');

  const toggleVariant = () => {
    setVariant(current => (current === 'traditional' ? 'simplified' : 'traditional'));
  };

  const getText = (text: ChineseText | undefined): string => {
    if (!text || typeof text !== 'object') return '';
    return text[variant] || '';
  };

  const value = {
    variant,
    toggleVariant,
    getText,
  };

  return <CharacterContext.Provider value={value}>{children}</CharacterContext.Provider>;
}
