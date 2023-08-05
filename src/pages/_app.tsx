import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@mui/material/styles";
import { getTheme } from '../../components/layout/Theme';

export default function App({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
  return <Component {...pageProps} />
}
=======
  const theme = getTheme()

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
>>>>>>> main
