import { Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import { useAppDispatch } from '../../../app/hooks'
import Layout from '../../../components/layout/Layout'
import { getTheme } from '../../../components/layout/Theme'
import { ProductType } from '../../../components/shared/ProductTypes'
import { WishlistToggleButton } from '../../../components/shared/WishlistToggleButton'
import { CartItemType } from '../../../components/shared/cart/CartTypes'
import { addItemToCart } from '../../../components/shared/cart/cartSlice'
import { NumberInput } from '../../../components/shared/NumberInput'
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
type Props = {
    product?: ProductType;
}

export default function ProductView({ product }: Props) {
    console.log(product, "product");
    const [quantity, setQuantity] = useState(1)
    const [showDialog, setShowDialog] = useState(false)
    const dispatch = useAppDispatch();

    const handleToggleDialog = () => {
        setShowDialog(true)
        setTimeout(() => {
            setShowDialog(false)
        }, 2000);

    }
    const handleAddToCart = () => {
        const cartItem: CartItemType = {
            product: product ?? {} as ProductType,
            qty: quantity
        }
        dispatch(addItemToCart(cartItem));
        handleToggleDialog()
    }
    const theme = getTheme()
    return (
        <Layout>
            {showDialog &&
                <Stack direction={'row'} sx={{ position: 'fixed', justifyContent: 'center', width: '100%' }}>
                    <Stack direction={'row'} sx={{ position: 'relative', maxWidth: 'lg', width: '100%', justifyContent: 'flex-end' }}>
                        {/* <Stack sx={{ p: 2, mx: 4, position: 'relative', backgroundColor: theme.palette.secondary.main, maxWidth: 'fit-content', width: '100%', justifyContent: 'flex-end' }} > */}
                        <Card sx={{
                            backgroundColor: theme.palette.secondary.main,
                            // width: 300, position: 'absolute', zIndex: 9, top: 0,
                            // right: 32,
                            //  right: 140,
                            px: 3,
                            py: 1
                        }}>
                            <Stack direction={'row'} alignItems={'center'}>
                                <Typography variant='subtitle1'>
                                    {'Item added to cart!'}
                                </Typography>
                                {/* <Typography>
                                    {quantity}
                                    {product?.attributes?.title ?? ''}
                                </Typography>
                                <Typography>
                                    €{product?.attributes?.price?.toFixed(2)}
                                </Typography> */}
                                <IconButton>
                                    <CloseIcon />
                                </IconButton>
                            </Stack>
                        </Card>
                    </Stack>
                </Stack>}
            <Stack direction={'column'} width={'100%'} sx={{ position: 'relative', maxWidth: 'lg', mx: 'auto', p: { sm: 4, xs: 2 } }}
                spacing={4}>

                <Stack direction={{ md: 'row', xs: 'column' }} spacing={4}>
                    <Stack py={1} position={'relative'} height={'40vh'} width={'100%'}>
                        <Box sx={{ position: 'absolute', zIndex: 9 }}>
                            <WishlistToggleButton product={product} />
                        </Box>
                        <Image
                            fill
                            objectFit='contain'
                            objectPosition='center'
                            alt={product?.attributes.images?.data[0].attributes.alternativeText ?? ''}
                            src={`${process.env.NEXT_PUBLIC_API_URL_PRODUCTION}${product?.attributes.images?.data[0]?.attributes.url}` ?? ''}
                        />
                    </Stack>
                    <Stack alignItems={'flex-start'} justifyContent={'space-between'} width={'100%'}>
                        <Typography variant='h3' fontWeight={500}>
                            {product?.attributes?.title ?? ''}
                        </Typography>
                        {/* <Typography variant='caption'>Price:</Typography> */}
                        <Typography variant='h6'>
                            €{product?.attributes?.price?.toFixed(2)}
                        </Typography>
                        <Typography variant='body1' py={2}>
                            {product?.attributes?.shortDescription ?? ''}
                        </Typography>

                        <Stack direction={'column'} pt={1} spacing={2}>
                            <NumberInput amount={quantity} setAmount={setQuantity} minValue={0} />
                            <Button
                                onClick={handleAddToCart}
                                sx={{ marginLeft: 'auto', alignSelf: 'center', fontWeight: 600 }}
                                size="medium"
                                color="secondary"
                                variant='contained'
                                aria-label={`View ${product?.attributes?.title} product`}
                            >
                                Add to cart
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>

            </Stack>
        </Layout>
    )
}

export async function getStaticPaths() {

    const products = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)

    const paths = products.data.data.map((p: ProductType) => ({
        params: { slug: p.attributes?.slug },
        // locale: p.attributes.locale
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context: any) => {
    const product = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products/${context.params.slug}?populate=deep`
    )
    return {
        props: {
            product: product?.data?.data
        }
    }
}