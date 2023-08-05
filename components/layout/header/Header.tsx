import Stack from '@mui/system/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import Container from '@mui/system/Container'
import PixIcon from '@mui/icons-material/Pix';
import Button from '@mui/material/Button';
import { getTheme } from '../Theme';

export default function Header() {
    const theme = getTheme()
    return (
        <Container maxWidth={false} sx={{ width: '100%', backgroundColor: theme.palette.secondary.dark }}>
            <Stack direction={'row'} p={2} sx={{ maxWidth: 'lg', mx: 'auto', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                <Stack direction={'row'} spacing={4} alignItems={'center'}>
                    <Link passHref href={'/'}>
                        <PixIcon fontSize='large' sx={{ color: theme.palette.info.main }} />
                    </Link>
                    <Link passHref href={'/products'}>
                        <Typography color={theme.palette.info.main}>
                            Products
                        </Typography>
                    </Link>

                </Stack>
                <Link passHref href={'/login'}>
                    <Button variant='contained'>
                        Login
                    </Button>
                </Link>
            </Stack>
        </Container>
    );
}