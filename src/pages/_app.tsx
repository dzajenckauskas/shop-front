import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@mui/material/styles";
import { getTheme } from '../../components/layout/Theme';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../app/store/store';

export default function App({ Component, pageProps }: AppProps) {
  const theme = getTheme()

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
