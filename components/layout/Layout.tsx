import Stack from '@mui/material/Stack';
import React from 'react';
import { getTheme } from './Theme';
import Header from './header/Header';
import Footer from './footer/Footer';
import Head from 'next/head';

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children, }: Props) => {
    const theme = getTheme()
    // TODO: add head tag to layout.
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Stack sx={{
                height: '100%',
                backgroundColor: theme.palette.background.default,
                position: 'relative'
            }}>
                <Header />
                <Stack minHeight={'calc(100vh - 150px)'} sx={{
                    // backgroundColor: theme.palette.primary.dark,
                    // background: `linear-gradient(180deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                    // pt: '60px', maxWidth: '100vw', overflow: 'hidden'

                }}>
                    {children}
                </Stack>

                <Footer />
            </Stack>
        </>

    )
}

export default Layout