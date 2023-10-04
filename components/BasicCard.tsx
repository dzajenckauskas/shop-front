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

type Props = {
    product: ProductType;
}

export default function BasicCard({ product }: Props) {


    console.log(product.attributes.images);

    const cart = useAppSelector(selectCart)
    const cartItem = cart.items.find((ci) => ci.product.id === product.id)
    return (
        <Card variant="outlined" sx={{ padding: 2 }}>
            <Stack direction={'row'} alignItems={'flex-start'} justifyContent={'space-between'}>
                <Box>
                    <Typography variant='h6' fontWeight={600}>{product.attributes?.title}</Typography>
                    {/* <Typography variant='body2' fontWeight={400}>{product.attributes.createdAt}</Typography> */}
                </Box>
                <WishlistToggleButton product={product} />
            </Stack>
            <Stack minHeight="200px" maxHeight="400px" py={1} position={'relative'} sx={{ minWidth: 300 }}>
                <Image
                    fill
                    objectFit='cover'
                    alt={product.attributes.images?.data[0].attributes.alternativeText ?? ''}
                    src={product.attributes.images?.data[0]?.attributes.url}
                />
            </Stack>
            <Stack direction={'row'} pt={1}>
                <Stack spacing={.25} >
                    <Typography variant='caption'>Price:</Typography>
                    <Typography variant='h6'>
                        ${product.attributes?.price.toFixed(2)}
                    </Typography>
                </Stack>
                <Link style={{ marginLeft: 'auto', alignSelf: 'center', fontWeight: 600 }}
                    passHref href={`/products/${product.attributes?.slug}`}>
                    <Button
                        size="large"
                        color={!!cartItem ? "secondary" : 'primary'}
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