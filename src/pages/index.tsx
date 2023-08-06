import axios from 'axios';
import Head from 'next/head';
import BasicCard from '../../components/BasicCard';
import Layout from '../../components/layout/Layout';
import Stack from '@mui/material/Stack'
import { ProductsResponseType } from '../../components/shared/ProductTypes';
import Typography from '@mui/material/Typography'
import { PageTitle } from '../../components/layout/Pagetitle';
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
        <PageTitle main title='Welcome to myShop' />
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