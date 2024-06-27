'use client';
import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import theme, { lightTheme } from './theme';
import { GlobalStyle } from './global';
import { SnackbarProvider, useSnackbar } from 'notistack';

const StyledComponentThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      theme={{ ...theme, colors: { ...theme.colors, ...lightTheme } }}
    >
      <SnackbarProvider>
        <GlobalStyle />
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default StyledComponentThemeProvider;
