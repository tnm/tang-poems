import React, { createContext, useContext, useState } from 'react';
import { ChineseText } from '../types/poem';

type CharacterVariant = 'traditional' | 'simplified';

interface CharacterContextType {
  variant: CharacterVariant;
  toggleVariant: () => void;
  getText: (text: ChineseText | undefined) => string;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export function CharacterProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState<CharacterVariant>('traditional');

  const toggleVariant = () => {
    setVariant(current => current === 'traditional' ? 'simplified' : 'traditional');
  };

  const getText = (text: ChineseText | undefined): string => {
    if (!text || typeof text !== 'object') return '';
    return text[variant] || '';
  };

  const value = {
    variant,
    toggleVariant,
    getText
  };

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacter() {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacter must be used within a CharacterProvider');
  }
  return context;
}
