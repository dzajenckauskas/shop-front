import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useAppSelector } from '../app/hooks';
import { selectCart } from './shared/cart/cartSlice';

export const CheckoutItems = () => {
    const cart = useAppSelector(selectCart)

    const renderCheckoutItems = cart.items.map((ci) => {
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
                        {ci.product.attributes?.price?.toFixed(2)} Eur
                    </Typography>
                </Box>
            </Stack>
        )
    })

    const sumWithInitial = cart.items.reduce((a, c) => a + (c.product.attributes.price * c.qty), 0);

    return (
        <Stack width={'100%'}>
            <Typography variant="h6" gutterBottom>
                Checkout items
            </Typography>
            <Stack spacing={2} pt={1} width={'100%'} pb={2}>
                {renderCheckoutItems}
            </Stack>
            <Stack spacing={1} pb={2} sx={{ borderTop: '1px solid black' }} pt={1}>
                <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
                    <Typography variant='subtitle1' fontWeight={500}>
                        {'Cart total:'}
                    </Typography>
                    <Typography variant='subtitle1' fontWeight={500}>
                        {sumWithInitial.toFixed(2)} Eur
                    </Typography>
                </Stack>

            </Stack>
        </Stack>
    )
}