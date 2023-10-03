import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PixIcon from '@mui/icons-material/Pix';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { logout } from '../../shared/auth/accountSlice';
import { getTheme } from '../Theme';
import Button from '@mui/material/Button'
import { useState } from 'react';
import { selectCart } from '../../shared/cart/cartSlice';
import { calculateCartTotals } from '../../shared/cart/calculateCartTotals';
import Card from '@mui/material/Card';
import { selectWishlist } from '../../../app/wishlistSlice';

type Props = {
    isLoggedIn?: boolean;
}


export default function Header({ isLoggedIn }: Props) {
    const theme = getTheme()
    const router = useRouter();
    const dispatch = useAppDispatch()
    const handleLogOut = () => {
        dispatch(logout);
        sessionStorage.removeItem('jwt');
        router.push('/login');
    }
    const [openCartDropdown, setOpenCartDropdown] = useState(false)

    const toggleCartDropdown = () => {
        setOpenCartDropdown(!openCartDropdown)
    }
    const [openWishlistDropdown, setOpenWishlistDropdown] = useState(false)

    const toggleWishlistDropdown = () => {
        setOpenWishlistDropdown(!openWishlistDropdown)
    }


    const cart = useAppSelector(selectCart)
    const wishlist = useAppSelector(selectWishlist)

    const renderWishlistItems = wishlist.products.map((ci) => {
        return (
            <Stack direction={'row'} pt={1} key={ci.id}>
                <Stack spacing={.25} >
                    <Typography variant='h6'>
                        {ci.attributes?.price?.toFixed(2)} Eur
                    </Typography>
                </Stack>
                <Link style={{ marginLeft: 'auto', alignSelf: 'center', fontWeight: 600 }}
                    passHref href={`/products/${ci.attributes?.slug}`}>

                    <Typography variant='caption'> {ci.attributes?.title}</Typography>
                </Link>
            </Stack>
            // <Stack key={ci.id} direction={'row'} sx={{ justifyContent: 'space-between' }}>
            //     <Typography>
            //         {ci.product.attributes?.title}
            //     </Typography>
            //     <Typography>
            //         {ci.product.attributes?.price?.toFixed(2)} Eur
            //     </Typography>
            // </Stack>

        )
    })
    const renderCartItems = cart.items.map((ci) => {
        return (
            <Stack key={ci.id} width={'100%'} direction={'row'} justifyContent={'space-between'}>
                <Box>
                    <Link style={{ marginLeft: 'auto', alignSelf: 'center', fontWeight: 600 }}
                        passHref href={`/products/${ci.product.attributes?.slug}`}>
                        <Typography variant='subtitle1'> {ci.product.attributes?.title}</Typography>
                    </Link>
                </Box>
                <Box>
                    <Typography variant='caption'> {ci.qty}</Typography>
                </Box>
                <Box>
                    <Typography variant='subtitle1'>
                        {ci.product.attributes?.price}
                    </Typography>
                </Box>
            </Stack>
        )
    })
    const sumWithInitial = cart.items.reduce((a, c) => a + (c.product.attributes.price * c.qty), 0);

    return (
        <>
            <Container maxWidth={false} sx={{ zIndex: 99, position: 'fixed', top: 0, alignItems: 'center', width: '100%', backgroundColor: theme.palette.background.default }}>
                <Stack direction={'row'} p={2} sx={{ px: { lg: 4, md: 0, sm: 1, xs: 0 }, maxWidth: 'lg', mx: 'auto', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                    <Link passHref href={'/'} style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ bgcolor: '#fff', mr: 1 }}>
                            <PixIcon fontSize='large' sx={{ color: theme.palette.secondary.main }} />
                        </Avatar>
                        <Typography variant='h6' sx={{ fontWeight: 500, color: theme.palette.grey[400] }}>
                            localShop
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
                            {/* <Link passHref href={'/wishlist'}> */}
                            {renderWishlistItems?.length > 0 && <Avatar sx={{ bgcolor: '#fff', }} onClick={toggleWishlistDropdown}>
                                <BookmarkIcon sx={{ color: theme.palette.secondary.main }} />
                            </Avatar>}
                            {/* </Link> */}
                            {/* <Link passHref href={'/checkout'}> */}
                            <Avatar sx={{ bgcolor: '#fff', cursor: 'pointer' }} onClick={toggleCartDropdown}>
                                <ShoppingCartIcon sx={{ color: theme.palette.secondary.main }} />
                            </Avatar>
                            {/* </Link> */}
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
                            <Button variant='contained' onClick={handleLogOut}>
                                Log out
                            </Button>}
                    </Stack>
                    {openCartDropdown &&
                        <Card sx={{ backgroundColor: '#fff', width: 300, position: 'fixed', zIndex: 9, right: 0, top: 70, p: 3 }}>
                            <Typography variant='h6' fontWeight={700}>
                                {"Cart"}
                            </Typography>
                            <Stack spacing={1} py={3}>
                                {renderCartItems}
                            </Stack>
                            <Stack spacing={1} pb={2} sx={{ borderTop: '1px solid black' }} pt={1}>
                                <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
                                    <Typography variant='subtitle1' fontWeight={500}>
                                        {'Cart total:'}
                                    </Typography>
                                    <Typography variant='subtitle1' fontWeight={500}>
                                        {sumWithInitial}
                                    </Typography>
                                </Stack>

                            </Stack>
                            <Link passHref href={'/checkout'}>
                                <Button variant='contained' >
                                    Go to checkout
                                </Button>
                            </Link>
                        </Card>
                    }
                    {openWishlistDropdown &&
                        <Card sx={{ backgroundColor: '#fff', width: 300, position: 'fixed', zIndex: 9, right: 0, top: 70, p: 3 }}>
                            <Typography variant='h6' fontWeight={700}>
                                {"Wishlist"}
                            </Typography>
                            <Stack spacing={1} py={3}>
                                {renderWishlistItems}
                            </Stack>
                            <Link passHref href={'/wishlist'}>
                                <Button variant='contained' >
                                    See wishlist
                                </Button>
                            </Link>
                        </Card>
                    }
                </Stack>
            </Container>
            <Box sx={{ height: 70 }}>
            </Box>

        </>
    );
}