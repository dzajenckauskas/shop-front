import Stack from '@mui/material/Stack';
import React from 'react';
import { getTheme } from './Theme';
import Header from './header/Header';
import Footer from './footer/Footer';

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children, }: Props) => {
    const theme = getTheme()
    // TODO: add head tag to layout.
    return (
        <Stack sx={{ height: '100%', backgroundColor: theme.palette.background.default, position: 'relative' }}>
            <Header />
            <Stack minHeight={'80vh'} sx={{
                // backgroundColor: theme.palette.primary.dark,
                // background: `linear-gradient(180deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                // pt: '60px', maxWidth: '100vw', overflow: 'hidden'

            }}>
                {children}
            </Stack>

            <Footer />
        </Stack>
    )
}

export default Layout