import { createContext } from 'react';
import type { ChineseText } from '../types/poem';

export type CharacterVariant = 'traditional' | 'simplified';

export interface CharacterContextType {
  variant: CharacterVariant;
  toggleVariant: () => void;
  getText: (text: ChineseText | undefined) => string;
}

export const CharacterContext = createContext<CharacterContextType | undefined>(undefined);
