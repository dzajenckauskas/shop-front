import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { ProductType } from './shared/ProductTypes';
import { WishlistToggleButton } from './shared/WishlistToggleButton';
import Button from '@mui/material/Button'
import { useAppSelector } from '../app/hooks';
import { selectCart } from './shared/cart/cartSlice';
import Image from 'next/image';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { getTheme } from './layout/Theme';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

type Props = {
    product: ProductType;
}
export const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        // backgroundColor: '#f5f5f9',
        // color: 'rgba(0, 0, 0, 0.87)',
        // maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        // border: '1px solid #dadde9',
    },
}));

export default function BasicCard({ product }: Props) {
    console.log(product.attributes.images);
    const theme = getTheme()
    const cart = useAppSelector(selectCart)
    const cartItem = cart.items.find((ci) => ci.product.id === product.id)
    return (
        <Card variant="outlined" sx={{ padding: 2, position: 'relative' }}>
            <Stack direction={'row'} alignItems={'flex-start'} justifyContent={'space-between'} sx={{
                position: 'absolute', zIndex: 1, left: 16
            }}>
                <WishlistToggleButton product={product} />
            </Stack>
            {cartItem && <Stack direction={'row'} alignItems={'flex-start'} justifyContent={'space-between'} sx={{
                position: 'absolute', zIndex: 1, right: 16
            }}>
                <HtmlTooltip
                    title={
                        <React.Fragment>
                            <Typography color="inherit">Is in cart!</Typography>
                            {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                            {"It's very engaging. Right?"} */}
                        </React.Fragment>}>
                    <AddShoppingCartIcon sx={{ color: theme.palette.secondary.main }} />
                </HtmlTooltip>
            </Stack>}
            <Stack minHeight="200px" maxHeight="400px" py={1} position={'relative'} sx={{ minWidth: 300 }}>
                <Image
                    fill
                    objectFit='cover'
                    alt={product.attributes.images?.data[0].attributes.alternativeText ?? ''}
                    src={product.attributes.images?.data[0]?.attributes.url}
                />
            </Stack>
            <Typography variant='h6' fontWeight={600} py={1}>{product.attributes?.title}</Typography>
            <Stack direction={'row'} alignItems={'flex-end'}>
                <Stack spacing={.25} >
                    <Typography variant='caption'>Price:</Typography>
                    <Typography variant='h6'>
                        ${product.attributes?.price.toFixed(2)}
                    </Typography>
                </Stack>
                <Link style={{ marginLeft: 'auto', alignSelf: 'flex-end', fontWeight: 600 }}
                    passHref href={`/products/${product.attributes?.slug}`}>
                    <Button
                        size="large"
                        color={'primary'}
                        variant='contained'
                        aria-label={`View ${product.attributes?.title} product`}
                    >
                        View
                    </Button>
                </Link>
            </Stack>
        </Card>
    );
}