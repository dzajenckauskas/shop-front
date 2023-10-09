import '@/styles/globals.css'
import 'react-alice-carousel/lib/alice-carousel.css';
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@mui/material/styles";
import { getTheme } from '../../components/layout/Theme';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../app/store/store';

export default function App({ Component, pageProps }: AppProps) {
  const theme = getTheme()
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
