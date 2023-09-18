import Stack from '@mui/material/Stack';
import axios from 'axios';
import BasicCard from '../../components/BasicCard';
import Layout from '../../components/layout/Layout';
import { PageTitle } from '../../components/layout/Pagetitle';
import { ProductsResponseType } from '../../components/shared/ProductTypes';
// const inter = Inter({ subsets: ['latin'] })

type Props = {
  products: ProductsResponseType
}

export default function Home({ products }: Props) {
  const renderProducts = products.data.map((p) => (
    <BasicCard product={p} />
  ))
  return (
    <Layout>
      <Stack sx={{ maxWidth: 'lg', mx: 'auto', width: '100%', px: { sm: 4, xs: 2 } }}>
        <PageTitle main title='Welcome to localShop' />
      </Stack>
    </Layout>
  )
}

export const getStaticProps = async (context: any) => {
  const products = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)

  return {
    props: {
      products: products.data
    }
  }
}