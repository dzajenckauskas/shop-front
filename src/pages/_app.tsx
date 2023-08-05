import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@mui/material/styles";
import { getTheme } from '../../components/layout/Theme';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const theme = getTheme()

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
