import Stack from '@mui/material/Stack';
import axios from 'axios';
import BasicCard from '../../components/BasicCard';
import Layout from '../../components/layout/Layout';
import { PageTitle } from '../../components/layout/Pagetitle';
import { ProductsResponseType } from '../../components/shared/ProductTypes';
// const inter = Inter({ subsets: ['latin'] })
import Shopify from 'shopify-api-node';
import Link from 'next/link';
import Button from '@mui/material/Button'

type Props = {
  products: ProductsResponseType
}

export default function Home({ products }: Props) {
  const renderProducts = products.data.map((p) => (
    <BasicCard product={p} key={p.id} />
  ))
  return (
    <Layout>
      <Stack sx={{ maxWidth: 'lg', mx: 'auto', width: '100%', px: { sm: 4, xs: 2 } }}
        spacing={4}>
        <PageTitle main title='Welcome to localShop' />
        <Stack direction={'row'} spacing={4}>
          {renderProducts}
        </Stack>
        <Link passHref href={'/products'}>
          <Button variant='contained' >
            See all products
          </Button>
        </Link>
      </Stack>
    </Layout>
  )
}

export const getStaticProps = async (context: any) => {

  // const shopify = new Shopify({
  //   shopName: process.env.SHOPIFY_SECRET_SHOPNAME ?? '',
  //   accessToken: process.env.SHOPIFY_SECRET_API ?? ''
  // });

  const products = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)


  // await shopify.order
  //   .get(5727615123802)
  //   .then((data) => console.log(data, 'data'))
  //   .catch((err) => console.error(err, 'err'))

  return {
    props: {
      products: products.data
    }
  }
}