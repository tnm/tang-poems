import { CSSProperties } from 'react';

type PseudoProperties = {
  '&::before'?: CSSProperties;
  '&::after'?: CSSProperties;
  '::placeholder'?: CSSProperties;
};

type MediaQueryProperties = {
  '@media (max-width: 600px)'?: CSSProperties;
};

export type ExtendedCSSProperties = CSSProperties & PseudoProperties & MediaQueryProperties;
