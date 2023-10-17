import { Stack } from '@mui/material';
import axios from 'axios';
import BasicCard from '../../../components/BasicCard';
import Layout from '../../../components/layout/Layout';
import { PageTitle } from '../../../components/layout/Pagetitle';
import { ProductsResponseType } from '../../../components/shared/ProductTypes';
import Grid from '@mui/material/Grid';

type Props = {
  products: ProductsResponseType
}

export default function ProductsList({ products }: Props) {
  const renderProducts = products.data.map((p) => (
    <Grid item key={p.id}
      xs={6} sm={4} md={3}>
      <BasicCard product={p} />
    </Grid>
  ))
  return (
    <>
      <Layout>
        <Stack spacing={4} sx={{ maxWidth: 'lg', mx: 'auto', width: '100%', px: { sm: 4, xs: 2 } }}>
          <PageTitle title='All products' />
          <Grid container width={'100%'}>
            {renderProducts}
          </Grid>
        </Stack>
      </Layout>
    </>
  )
}

export const getStaticProps = async (context: any) => {
  const products = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=deep`)

  return {
    props: {
      products: products.data
    }
  }
}