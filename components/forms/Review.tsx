import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getTheme } from '../layout/Theme';
import { selectCart } from '../shared/cart/cartSlice';
import { CheckoutType } from '@/pages/checkout';
import { UseFormReturn } from 'react-hook-form';
import { AccounDataType } from './AddressForm';

type Props = {
    accountData?: AccounDataType;
    form?: UseFormReturn<CheckoutType, any, undefined>
}



export default function Review({ accountData, form }: Props) {
    const cart = useAppSelector(selectCart)
    const theme = getTheme();
    const customer = form?.watch('customer')
    const renderCartItems = cart.items.map((ci, index) => {
        return (
            // <Stack key={ci.id} width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            //     <Stack direction={'row'}>
            //         {/* <IconButton
            //             size="small"
            //             onClick={() => handleRemoveItemFromCart(ci)}
            //         >
            //             <DeleteOutlineIcon sx={{ color: theme.palette.grey[500] }} />
            //         </IconButton> */}
            //         <Link style={{ alignSelf: 'center', fontWeight: 600 }}
            //             passHref href={`/products/${ci.product.attributes?.slug}`}>
            //             <Typography variant='subtitle1' sx={{ ':hover': { color: theme.palette.primary.main } }}>
            //                 {ci.product.attributes?.title}
            //             </Typography>
            //         </Link>
            //     </Stack>

            //     <Box>
            //         <Typography variant='caption'> {ci.qty}</Typography>
            //     </Box>
            //     <Box>
            //         <Typography variant='subtitle1'>
            //             {ci.product.attributes?.price?.toFixed(2)}
            //         </Typography>
            //     </Box>
            // </Stack>
            <Stack key={index} width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
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
        <React.Fragment>
            <Typography variant="h6" gutterBottom pb={1}>
                Order summary
            </Typography>
            <List disablePadding>
                {/* {products.map((product) => (
                    <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))} */}
                {renderCartItems}
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Shipping" />
                    <Typography variant="subtitle1">
                        {(0)?.toFixed(2)}
                    </Typography>
                </ListItem>
                <Stack direction={'row'} sx={{ justifyContent: 'space-between', py: 1, px: 0 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {'Total'}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {cart.total?.toFixed(2)}
                    </Typography>
                </Stack>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>{customer?.firstName} {customer?.lastName}</Typography>
                    <Typography gutterBottom>{customer?.email} {customer?.phone}</Typography>
                    <Typography gutterBottom>{customer?.address}, {customer?.city}, {customer?.postcode}, {customer?.country}</Typography>
                </Grid>
                {/* <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid> */}
            </Grid>
        </React.Fragment>
    );
}