import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { ProductType } from './shared/ProductTypes';
import { WishlistToggleButton } from './shared/WishlistToggleButton';

type Props = {
    product: ProductType;
}

export default function BasicCard({ product }: Props) {
    return (
        <Card variant="outlined" sx={{ padding: 2 }}>
            <Stack direction={'row'} alignItems={'flex-start'} justifyContent={'space-between'}>
                <Box>
                    <Typography variant='h6' fontWeight={600}>{product.attributes?.title}</Typography>
                    <Typography variant='body2' fontWeight={400}>April 24 to May 02, 2021</Typography>
                </Box>
                <WishlistToggleButton product={product} />
            </Stack>
            <Stack minHeight="120px" maxHeight="200px" py={1}>
                <img
                    src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
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

                        size="medium"
                        color="primary"
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