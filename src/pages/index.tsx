import axios from 'axios';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import BasicCard from '../../components/BasicCard';
import Layout from '../../components/layout/Layout';
import { PageTitle } from '../../components/layout/Pagetitle';
import { ProductsResponseType } from '../../components/shared/ProductTypes';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { getTheme } from '../../components/layout/Theme';

type Props = {
  newProducts: ProductsResponseType
  popularProducts: ProductsResponseType
  heroBanner?: any
}

export default function Home({ newProducts, popularProducts, heroBanner }: Props) {
  const theme = getTheme()

  const renderNewProducts = newProducts.data.map((p) => (
    <BasicCard product={p} key={p.id} />
  ))
  const renderPopularProducts = popularProducts.data.map((p) => (
    <BasicCard product={p} key={p.id} />
  ))

  const renderBanners = heroBanner?.data.attributes.banner.map((b: any) => {
    return (
      <Stack key={b.images.data[0].id} sx={{ position: 'relative', width: '100%', backgroundColor: theme.palette.secondary.main, height: { md: '50vh', xs: '70vh' }, }}>
        <Stack position={'absolute'} sx={{ pt: 22, zIndex: 1, alignItems: { md: 'center', xs: 'flex-start' }, width: '100%', px: { sm: 4, xs: 2 }, justifyItems: 'flex-start' }}>
          <Typography variant='h1' fontWeight={500} color={theme.palette.secondary.main}>
            {b.title}
          </Typography>
          <Typography variant='subtitle1' color={theme.palette.secondary.main}>
            {b.subtitle}
          </Typography>
          <Link passHref href={'/products'}>
            <Button variant='contained' color='secondary' sx={{ mt: 4 }}>
              View products
            </Button>
          </Link>
        </Stack>
        <Image src={b.images?.data[0]?.attributes.url ?? ''} alt={''} fill objectFit='cover' objectPosition='top' />
      </Stack>
    )
  })
  return (
    <Layout>
      <AliceCarousel disableDotsControls disableButtonsControls items={renderBanners} />
      <Stack sx={{ maxWidth: 'lg', mx: 'auto', width: '100%', px: { sm: 4, xs: 2 }, pt: { sm: 4, xs: 2 } }}
        spacing={4}>
        {/* <PageTitle title='New products' /> */}
        {/* <Stack direction={'row'} spacing={4}>
          {renderNewProducts}
        </Stack> */}
        <PageTitle title='Popular products' />
        <Stack direction={'row'} spacing={4}>
          {renderPopularProducts}
        </Stack>
        <Link passHref href={'/products'}>
          <Button variant='outlined' color='secondary' sx={{ mt: 4 }}>
            See all products
          </Button>
        </Link>
      </Stack>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const popularProducts = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products?filters[isPopular][$eq]=${true}&populate=*`).catch((err) => console.log(err))
  const newProducts = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products?filters[isNew][$eq]=${true}&populate=*`).catch((err) => console.log(err))
  const heroBanner = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/hero-banner?populate=deep`).catch((err) => console.log(err))

  return {
    props: {
      newProducts: newProducts?.data,
      popularProducts: popularProducts?.data,
      heroBanner: heroBanner?.data ?? null,
    }
  }
}