'use client';
import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import theme, { lightTheme } from './theme';
import { GlobalStyle } from './global';

const StyledComponentThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      theme={{ ...theme, colors: { ...theme.colors, ...lightTheme } }}
    >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledComponentThemeProvider;
