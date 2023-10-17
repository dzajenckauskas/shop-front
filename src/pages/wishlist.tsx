import { Stack } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { selectWishlist } from '../../app/wishlistSlice';
import BasicCard from '../../components/BasicCard';
import Layout from '../../components/layout/Layout';
import { PageTitle } from '../../components/layout/Pagetitle';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Home() {
    const wishlist = useAppSelector(selectWishlist);
    const renderProducts = wishlist.products.map((p) => (
        <Grid item key={p.id}
            xs={6} sm={4} md={4} lg={3}>
            <BasicCard product={p} />
        </Grid>
    ))
    return (
        <Layout>
            <Stack sx={{ maxWidth: 'lg', mx: 'auto', width: '100%', px: { sm: 4, xs: 2 } }}>
                <PageTitle main title='Wishlist' />
                <Grid container width={'100%'}>
                    {renderProducts}
                </Grid>
                <Link passHref href={'/products'} >
                    <Button variant='outlined' color='secondary' sx={{ mt: 4 }}>
                        See all products
                    </Button>
                </Link>
            </Stack>
        </Layout>
    )
}
