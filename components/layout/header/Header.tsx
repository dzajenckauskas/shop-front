import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import Container from '@mui/material/Container'
import PixIcon from '@mui/icons-material/Pix';
import Button from '@mui/material/Button';
import { getTheme } from '../Theme';
import { useRouter } from 'next/router';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

type Props = {
    isLoggedIn?: boolean;
}


export default function Header({ isLoggedIn }: Props) {
    const theme = getTheme()
    const router = useRouter();
    const handleLogOut = () => {

        sessionStorage.removeItem('jwt');
        router.push('/login');
    }
    return (
        <>
            <Container maxWidth={false} sx={{ zIndex: 99, position: 'fixed', top: 0, alignItems: 'center', width: '100%', backgroundColor: theme.palette.background.default }}>
                <Stack direction={'row'} p={2} sx={{ px: { lg: 4, md: 0, sm: 1, xs: 0 }, maxWidth: 'lg', mx: 'auto', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                    <Link passHref href={'/'} style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ bgcolor: '#fff', mr: 1 }}>
                            <PixIcon fontSize='large' sx={{ color: theme.palette.secondary.main }} />
                        </Avatar>
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

                        <Stack direction={'row'} spacing={1}>
                            <Link passHref href={'/wishlist'}>
                                <Avatar sx={{ bgcolor: '#fff', }}>
                                    <BookmarkIcon sx={{ color: theme.palette.secondary.main }} />
                                </Avatar>
                            </Link>
                            <Link passHref href={'/checkout'}>
                                <Avatar sx={{ bgcolor: '#fff', }}>
                                    <ShoppingCartIcon sx={{ color: theme.palette.secondary.main }} />
                                </Avatar>
                            </Link>
                            {isLoggedIn && <Link passHref href={'/account'}>
                                <Avatar sx={{ bgcolor: '#fff' }}>
                                    <AccountBoxIcon sx={{ color: theme.palette.secondary.main }} />
                                </Avatar>
                            </Link>}
                        </Stack>
                        {!isLoggedIn && <Link passHref href={'/login'}>
                            <Button variant='contained'>
                                Login
                            </Button>
                        </Link>}
                        {isLoggedIn &&
                            <Button variant='contained' onClick={() => handleLogOut()}>
                                Log out
                            </Button>}
                    </Stack>
                </Stack>
            </Container>
            <Box sx={{ height: 85 }}>
            </Box>
        </>
    );
}