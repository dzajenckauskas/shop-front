import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useAppSelector } from '../app/hooks';
import { getTheme } from './layout/Theme';
import { ProductType } from './shared/ProductTypes';
import { WishlistToggleButton } from './shared/WishlistToggleButton';
import { selectCart } from './shared/cart/cartSlice';

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
    const theme = getTheme()
    const cart = useAppSelector(selectCart)
    const cartItem = cart.items.find((ci) => ci.product.id === product.id)

    return (
        <Card elevation={0} sx={{ padding: 2, width: '100%', position: 'relative' }}>
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
            <Link style={{ marginLeft: 'auto', alignSelf: 'flex-end', fontWeight: 600 }}
                passHref href={`/products/${product.attributes?.slug}`}>
                <Stack sx={{ overflow: 'hidden' }}>
                    <Stack minHeight="200px" py={1} position={'relative'} sx={{ ':hover img': { transform: 'scale(1.25)' } }}>
                        <Image
                            fill
                            objectFit='contain'
                            objectPosition='center'
                            alt={product.attributes.images?.data[0].attributes.alternativeText ?? ''}
                            src={process.env.NEXT_PUBLIC_API_URL_PRODUCTION + product.attributes.images?.data[0]?.attributes.url}
                        />
                    </Stack>
                </Stack>
            </Link>
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
                        size="small"
                        color={'secondary'}
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