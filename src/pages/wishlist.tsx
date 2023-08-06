import { Stack } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { selectWishlist } from '../../app/wishlistSlice';
import BasicCard from '../../components/BasicCard';
import Layout from '../../components/layout/Layout';
import { PageTitle } from '../../components/layout/Pagetitle';


export default function Home() {
    const wishlist = useAppSelector(selectWishlist);
    const renderProducts = wishlist.products.map((p) => (
        <BasicCard product={p} key={p.id} />
    ))
    return (
        <Layout>
            <Stack sx={{ maxWidth: 'lg', mx: 'auto', width: '100%', px: { sm: 4, xs: 2 } }}>
                <PageTitle main title='Wishlist' />
                <Stack direction={'row'} sx={{ width: '100%' }} spacing={4}>
                    {renderProducts}
                </Stack>
            </Stack>
        </Layout>
    )
}
