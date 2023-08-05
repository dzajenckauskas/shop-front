import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import Container from '@mui/material/Container'
import PixIcon from '@mui/icons-material/Pix';
import Button from '@mui/material/Button';
import { getTheme } from '../Theme';

export default function Header() {
    const theme = getTheme()
    return (
        <>
            <Container maxWidth={false} sx={{ position: 'fixed', top: 0, alignItems: 'center', width: '100%' }}>
                <Stack direction={'row'} p={2} sx={{ maxWidth: 'lg', mx: 'auto', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                    <Link passHref href={'/'} style={{ display: 'flex', alignItems: 'center' }}>
                        <PixIcon fontSize='large' sx={{ color: theme.palette.secondary.main }} />
                        <Typography variant='h6' sx={{ fontWeight: 500, color: theme.palette.grey[400] }}>
                            MyShop
                        </Typography>
                    </Link>
                    <Stack direction={'row'} spacing={4} alignItems={'center'}>

                        <Link passHref href={'/products'}>
                            <Typography color={theme.palette.grey[400]}>
                                Products
                            </Typography>
                        </Link>
                        <Link passHref href={'/contacts'}>
                            <Typography color={theme.palette.grey[400]}>
                                Contacts
                            </Typography>
                        </Link>
                        <Link passHref href={'/login'}>
                            <Button variant='contained'>
                                Login
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Container>
            <Box sx={{ height: 70 }}>
                {/*  */}
            </Box>
        </>
    );
}