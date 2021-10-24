import React from 'react';

export interface CustomPalette {
  green: React.CSSProperties['color'];
  purple: React.CSSProperties['color'];
  background: React.CSSProperties['backgroundColor'];
  cyan: React.CSSProperties['color'];
}

declare module '@mui/material/styles' {
  interface Theme {
    customPalette: CustomPalette;
  }

  interface ThemeOptions {
    customPalette?: Partial<CustomPalette>;
  }
}
