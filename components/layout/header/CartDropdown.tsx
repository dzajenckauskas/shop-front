import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FocusOn } from 'react-focus-on';
import { useAppSelector } from '../../../app/hooks';
import { selectCart } from '../../shared/cart/cartSlice';
import { getTheme } from '../Theme';

type Props = {
    toggleCartDropdown: () => void
}
export const CartDropdown = ({ toggleCartDropdown }: Props) => {
    const theme = getTheme()
    const cart = useAppSelector(selectCart)

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
    return (
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
                            {cart.total?.toFixed(2)}
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
    )
}