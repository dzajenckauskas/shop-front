import axios from 'axios';
import Head from 'next/head';
import BasicCard from '../../components/BasicCard';
import Layout from '../../components/layout/Layout';
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
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content={"This is my shop"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      </Layout>
    </>
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