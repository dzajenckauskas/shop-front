import { Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import { useAppDispatch } from '../../../app/hooks'
import Layout from '../../../components/layout/Layout'
import { ProductType } from '../../../components/shared/ProductTypes'
import { WishlistToggleButton } from '../../../components/shared/WishlistToggleButton'
import { CartItemType } from '../../../components/shared/cart/CartTypes'
import { addItemToCart } from '../../../components/shared/cart/cartSlice'
import Image from 'next/image';
import { PageTitle } from '../../../components/layout/Pagetitle'

type Props = {
    product?: ProductType;
}

export default function ProductView({ product }: Props) {
    console.log(product, "product");

    const dispatch = useAppDispatch();
    // const cart = useAppSelector(selectCart)

    const handleAddToCart = () => {
        const cartItem: CartItemType = {
            product: product ?? {} as ProductType,
            qty: 1
        }
        dispatch(addItemToCart(cartItem));
    }
    return (
        <Layout>
            <Stack direction={'column'} width={'100%'} sx={{ maxWidth: 'lg', mx: 'auto', p: { sm: 4, xs: 2 } }}
                spacing={4}>
                <Stack direction={'row'} alignItems={'flex-start'} justifyContent={'space-between'}>
                    <Box>
                        <PageTitle title={product?.attributes?.title ?? ''} />
                    </Box>
                    <WishlistToggleButton product={product} />
                </Stack>
                <Stack py={1} position={'relative'} height={'40vh'} >
                    <Image
                        fill
                        objectFit='contain'
                        objectPosition='center'
                        alt={product?.attributes.images?.data[0].attributes.alternativeText ?? ''}
                        src={product?.attributes.images?.data[0]?.attributes.url ?? ''}
                    />
                </Stack>
                <Stack direction={'row'} pt={1}>
                    <Stack spacing={.25} >
                        <Typography variant='caption'>Price:</Typography>
                        <Typography variant='h6'>
                            ${product?.attributes?.price?.toFixed(2)}
                        </Typography>
                    </Stack>
                    <Button
                        onClick={handleAddToCart}
                        sx={{ marginLeft: 'auto', alignSelf: 'center', fontWeight: 600 }}
                        size="medium"
                        color="primary"
                        variant='contained'
                        aria-label={`View ${product?.attributes?.title} product`}
                    >
                        Add to cart
                    </Button>
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