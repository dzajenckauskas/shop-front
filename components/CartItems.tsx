import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { removeItemFromCart, selectCart } from './shared/cart/cartSlice';
import { CartItemType } from './shared/cart/CartTypes';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { getTheme } from './layout/Theme';

export const CartItems = () => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(selectCart)
    const theme = getTheme();
    const handleRemoveItemFromCart = (cartItem: CartItemType) => {
        dispatch(removeItemFromCart(cartItem))
    }
    const renderCartItems = cart.items.map((ci) => {
        return (
            <Stack key={ci.id} width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack direction={'row'}>
                    <IconButton
                        size="small"
                        onClick={() => handleRemoveItemFromCart(ci)}
                    >
                        <DeleteOutlineIcon sx={{ color: theme.palette.grey[500] }} />
                    </IconButton>
                    <Link style={{ alignSelf: 'center', fontWeight: 600, marginLeft: 10 }}
                        passHref href={`/products/${ci.product.attributes?.slug}`}>
                        <Typography variant='subtitle1' sx={{ ':hover': { color: theme.palette.primary.main } }}>
                            {ci.product.attributes?.title}
                        </Typography>
                    </Link>
                </Stack>

                <Box>
                    <Typography variant='caption'> {ci.qty}</Typography>
                </Box>
                <Box>
                    <Typography variant='subtitle1'>
                        {ci.product.attributes?.price?.toFixed(2)}
                    </Typography>
                </Box>
            </Stack>
        )
    })

    const cartTotal = cart.items.reduce((a, c) => a + (c.product.attributes.price * c.qty), 0);

    return (
        <Stack width={'100%'}>
            <Typography variant="h6" gutterBottom>
                Cart items
            </Typography>
            <Stack spacing={2} pt={1} width={'100%'} pb={2}>
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
        </Stack>
    )
}