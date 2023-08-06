import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { getTheme } from '../Theme';
import PixIcon from '@mui/icons-material/Pix';

export default function Footer() {
    const theme = getTheme()
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: 10
            }}
        >
            <Box
                component="footer"
                sx={{
                    height: 100,
                    py: 4.5,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="lg">
                    <Link passHref href={'/'} style={{ display: 'flex', alignItems: 'center' }}>
                        <PixIcon fontSize='large' sx={{ color: theme.palette.grey[400] }} />
                        <Typography variant='h6' sx={{ fontWeight: 500, color: theme.palette.grey[400] }}>
                            MyShop
                        </Typography>
                    </Link>

                </Container>
            </Box>
        </Box>
    );
}