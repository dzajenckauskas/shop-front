import Stack from '@mui/material/Stack';
import axios from 'axios';
import BasicCard from '../../components/BasicCard';
import Layout from '../../components/layout/Layout';
import { PageTitle } from '../../components/layout/Pagetitle';
import { ProductsResponseType } from '../../components/shared/ProductTypes';
import Button from '@mui/material/Button';
import Link from 'next/link';

type Props = {
  newProducts: ProductsResponseType
  popularProducts: ProductsResponseType
}

export default function Home({ newProducts, popularProducts }: Props) {
  const renderNewProducts = newProducts.data.map((p) => (
    <BasicCard product={p} key={p.id} />
  ))
  const renderPopularProducts = popularProducts.data.map((p) => (
    <BasicCard product={p} key={p.id} />
  ))
  return (
    <Layout>
      <Stack sx={{ maxWidth: 'lg', mx: 'auto', width: '100%', px: { sm: 4, xs: 2 } }}
        spacing={4}>

        <Stack sx={{ alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
          <PageTitle main title='Welcome to localShop' />
          <Link passHref href={'/products'}>
            <Button variant='outlined' >
              See all products
            </Button>
          </Link>
        </Stack>

        <PageTitle title='New products' />
        <Stack direction={'row'} spacing={4}>
          {renderNewProducts}
        </Stack>
        <PageTitle title='Popular products' />
        <Stack direction={'row'} spacing={4}>
          {renderPopularProducts}
        </Stack>
      </Stack>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const popularProducts = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products?filters[isPopular][$eq]=${true}&populate=*`)
  const newProducts = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products?filters[isNew][$eq]=${true}&populate=*`)

  return {
    props: {
      newProducts: newProducts.data,
      popularProducts: popularProducts.data
    }
  }
}