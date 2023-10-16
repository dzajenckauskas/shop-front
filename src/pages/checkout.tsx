import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { AccounDataType } from '../../components/forms/AddressForm';
import { CheckoutForm } from '../../components/forms/CheckoutForm';
import Layout from '../../components/layout/Layout';
import { PageTitle } from '../../components/layout/Pagetitle';
import { ProductType } from '../../components/shared/ProductTypes';
import { selectAccount } from '../../components/shared/auth/accountSlice';


export type CustomerType = {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    city: string;
    postcode: string;
    country: string;
    email: string;
}
export type OrderItemType = {
    id: number;
    quantity: number;
    lineTotal: number;
    price: number;
    originalPrice: number;
    product: ProductType;

}

export type CheckoutType = {
    orderTotal: number;
    customer: CustomerType;
    items: OrderItemType[]
}

export default function Checkout() {
    const [account, setAccount] = useState<AccounDataType | undefined>()
    const loggedInAccount = useAppSelector(selectAccount)

    React.useEffect(() => {
        const id = sessionStorage.getItem('userId');
        if (id && loggedInAccount.isLoggedIn) {
            axios
                .get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}?populate=*`)
                .then((response) => {
                    setAccount(response.data)

                })
                .catch(err => {
                    console.log(`Error: ${err}`)
                    setAccount({} as AccounDataType)
                })
        } else {
            setAccount({} as AccounDataType)
        }
    }, [loggedInAccount.isLoggedIn])

    return (
        <Layout>
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <PageTitle title='Checkout' />
                    {account && <CheckoutForm account={account} />}
                </Paper>
            </Container>
        </Layout>
    );
}
