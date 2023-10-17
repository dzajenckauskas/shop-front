import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FocusOn } from 'react-focus-on';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectWishlist } from '../../../app/wishlistSlice';
import { logout } from '../../shared/auth/accountSlice';
import { selectCart } from '../../shared/cart/cartSlice';
import { getTheme } from '../Theme';
type Props = {
    toggleOpenMobileMenuDropdown: () => void;
    isLoggedIn?: boolean;
}
export const MobileMenuDropdown = ({ toggleOpenMobileMenuDropdown, isLoggedIn }: Props) => {
    const theme = getTheme()
    const cart = useAppSelector(selectCart)
    const wishlist = useAppSelector(selectWishlist)
    const router = useRouter();
    const dispatch = useAppDispatch()
    const handleLogOut = () => {
        dispatch(logout());
        sessionStorage.removeItem('jwt');
        router.push('/login');
    }

    return (
        <FocusOn autoFocus={false} onClickOutside={toggleOpenMobileMenuDropdown} onEscapeKey={toggleOpenMobileMenuDropdown}>
            <Card sx={{
                backgroundColor: '#fff', width: '100vw', position: 'absolute', zIndex: 9, top: 0,
                display: { md: 'none', xs: 'flex' },
                right: -16,
                //  right: 140,
                p: 3
            }}>
                {/* <Typography variant='h6' fontWeight={700}>
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
                            {cart.total?.toFixed(2)}
                        </Typography>
                    </Stack>

                </Stack>
                <Link passHref href={'/checkout'}>
                    <Button variant='contained' >
                        Go to checkout
                    </Button>
                </Link> */}
                <Stack spacing={4} alignItems={'center'} sx={{}}>
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
                        {wishlist.products?.length > 0 &&
                            <Link passHref href={'/wishlist'}>
                                <Avatar sx={{ bgcolor: 'transparent', cursor: 'pointer', position: 'relative' }} >
                                    <BookmarkIcon sx={{ color: theme.palette.secondary.main }} />
                                    <Stack sx={{ backgroundColor: theme.palette.primary.main, borderRadius: '50%', right: 6, top: 6, width: 12, height: 12, position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography variant='caption' fontSize={8}>
                                            {wishlist.products?.length}
                                        </Typography>
                                    </Stack>
                                </Avatar>
                            </Link>
                        }
                        {cart.items.length > 0 &&
                            <Link passHref href={'/checkout'}>
                                <Avatar sx={{ bgcolor: 'transparent', cursor: 'pointer', position: 'relative' }}>
                                    <ShoppingCartIcon sx={{ color: theme.palette.secondary.main }} />
                                    <Stack sx={{ backgroundColor: theme.palette.primary.main, borderRadius: '50%', right: 6, top: 6, width: 12, height: 12, position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography variant='caption' fontSize={8}>
                                            {cart.items.length}
                                        </Typography>
                                    </Stack>
                                </Avatar>
                            </Link>}
                        {isLoggedIn && <Link passHref href={'/account'}>
                            <Avatar sx={{ bgcolor: 'transparent', }}>
                                <AccountBoxIcon sx={{ color: theme.palette.secondary.main }} />
                            </Avatar>
                        </Link>}
                    </Stack>
                    {!isLoggedIn &&
                        <Link passHref href={'/login'}>
                            <Button variant='contained'>
                                Login
                            </Button>
                        </Link>}
                    {isLoggedIn &&
                        <Button variant='contained' color='primary' size='small' onClick={handleLogOut}>
                            Log out
                        </Button>}
                </Stack>
            </Card>
        </FocusOn>
    )
}