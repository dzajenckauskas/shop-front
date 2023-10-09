import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PixIcon from '@mui/icons-material/Pix';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FocusOn } from 'react-focus-on';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectWishlist } from '../../../app/wishlistSlice';
import { logout } from '../../shared/auth/accountSlice';
import { selectCart } from '../../shared/cart/cartSlice';
import { getTheme } from '../Theme';

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
            <Stack key={ci.id} width={'100%'} direction={'row'} alignItems={'center'}>
                <Link style={{ fontWeight: 600 }}
                    passHref href={`/products/${ci.attributes?.slug}`}>
                    <Typography variant='subtitle1' sx={{ ':hover': { color: theme.palette.primary.main } }}>
                        {ci.attributes?.title}
                    </Typography>
                </Link>
            </Stack>
        )
    })
    const renderCartItems = cart.items.map((ci) => {
        return (
            <Stack key={ci.id} width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box width={'60%'}>
                    <Link style={{ marginLeft: 'auto', alignSelf: 'center', fontWeight: 600 }}
                        passHref href={`/products/${ci.product.attributes?.slug}`}>
                        <Typography variant='subtitle1' sx={{ ':hover': { color: theme.palette.primary.main } }}>
                            {ci.product.attributes?.title}
                        </Typography>
                    </Link>
                </Box>
                <Box sx={{ width: 5 }}>
                    <Typography variant='caption'> {ci.qty}</Typography>
                </Box>
                <Box width={'40%'}>
                    <Typography variant='subtitle1' textAlign={'right'}>
                        {(ci.product.attributes?.price * ci.qty)?.toFixed(2)}
                    </Typography>
                </Box>
            </Stack>
        )
    })
    const cartTotal = cart.items.reduce((a, c) => a + (c.product.attributes.price * c.qty), 0);
    return (
        <>
            <Container maxWidth={false} sx={{ zIndex: 99, position: 'fixed', top: 0, alignItems: 'center', width: '100%', backgroundColor: theme.palette.background.default, height: 70 }}>
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
                            <Typography color={theme.palette.grey[400]} sx={{ ':hover': { color: theme.palette.primary.main } }}>
                                Products
                            </Typography>
                        </Link>
                        <Link passHref href={'/contacts'}>
                            <Typography color={theme.palette.grey[400]} sx={{ ':hover': { color: theme.palette.primary.main } }}>
                                Contacts
                            </Typography>
                        </Link>

                        <Stack direction={'row'}>
                            {/* <Link passHref href={'/wishlist'}> */}
                            {renderWishlistItems?.length > 0 && <Avatar sx={{ bgcolor: 'transparent', cursor: 'pointer' }} onClick={toggleWishlistDropdown}>
                                <BookmarkIcon sx={{ color: theme.palette.secondary.main }} />
                            </Avatar>}
                            {/* </Link> */}
                            {/* <Link passHref href={'/checkout'}> */}
                            <Avatar sx={{ bgcolor: 'transparent', cursor: 'pointer' }} onClick={toggleCartDropdown}>
                                <ShoppingCartIcon sx={{ color: theme.palette.secondary.main }} />
                            </Avatar>
                            {/* </Link> */}
                            {isLoggedIn && <Link passHref href={'/account'}>
                                <Avatar sx={{ bgcolor: 'transparent', }}>
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
                            <Button variant='contained' color='primary' size='small' onClick={handleLogOut}>
                                Log out
                            </Button>}
                    </Stack>

                </Stack>
                <Stack direction={'row'} p={2} sx={{ position: 'relative', px: { lg: 4, md: 0, sm: 1, xs: 0 }, maxWidth: 'lg', mx: 'auto', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                    {openCartDropdown &&
                        <FocusOn autoFocus={false} onClickOutside={toggleCartDropdown} onEscapeKey={toggleCartDropdown}>
                            <Card sx={{
                                backgroundColor: '#fff', width: 300, position: 'absolute', zIndex: 9, top: 0,
                                right: 32,
                                //  right: 140,
                                p: 3
                            }}>
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
                                            {cartTotal?.toFixed(2)}
                                        </Typography>
                                    </Stack>

                                </Stack>
                                <Link passHref href={'/checkout'}>
                                    <Button variant='contained' >
                                        Go to checkout
                                    </Button>
                                </Link>
                            </Card>
                        </FocusOn>

                    }
                    {openWishlistDropdown &&
                        <FocusOn autoFocus={false} onClickOutside={toggleWishlistDropdown} onEscapeKey={toggleWishlistDropdown}>
                            <Card sx={{
                                backgroundColor: '#fff', width: 300, position: 'absolute', zIndex: 9, top: 0,
                                right: 32,
                                // right: 185,
                                p: 3
                            }}>
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
                        </FocusOn>
                    }
                </Stack >
            </Container >
            <Box sx={{ height: 70 }}>
            </Box>

        </>
    );
}