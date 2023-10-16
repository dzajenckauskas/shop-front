import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import axios from 'axios';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useAppSelector } from '../../app/hooks';
import { CartItems } from '../../components/CartItems';
import AddressForm, { AccounDataType } from '../../components/forms/AddressForm';
import PaymentForm from '../../components/forms/PaymentForm';
import Review from '../../components/forms/Review';
import Layout from '../../components/layout/Layout';
import { PageTitle } from '../../components/layout/Pagetitle';
import { selectCart } from '../../components/shared/cart/cartSlice';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { ProductType } from '../../components/shared/ProductTypes';
import ErrorBox from '../../components/shared/ErrorBox';
import { CheckoutType } from '@/pages/checkout';

type Props = {
    account?: AccounDataType
}

export const CheckoutForm = ({ account }: Props) => {
    const [errorMessage, setErrorMessage] = React.useState<string>()
    const router = useRouter()
    const cart = useAppSelector(selectCart);

    const getHostname = () => {
        if (typeof window !== 'undefined') {
            return window.location.host
        }
        return
    }


    const checkoutSchema = yup.object({
        customer: yup.object({
            firstName: yup.string().required('Required'),
            lastName: yup.string().required('Required'),
            email: yup.string().required('Required'),
            phone: yup.string().required('Required'),
            address: yup.string().required('Required'),
            city: yup.string().required('Required'),
            country: yup.string().required('Required'),
            postcode: yup.string().required('Required'),
        })
    })

    const form = useForm<CheckoutType>({
        mode: 'all',
        reValidateMode: 'onBlur',
        defaultValues: {
            orderTotal: cart.total,
            customer: { ...account }
        },
        resolver: yupResolver(checkoutSchema as any),
    })

    const { handleSubmit, formState: { errors, isSubmitting }, watch } = form


    const onSubmit: SubmitHandler<CheckoutType> = async (checkout: CheckoutType) => {
        setErrorMessage("")
        const items = cart.items.map((ci) => {
            const item = {
                quantity: ci.qty,
                lineTotal: ci.qty * ci.product.attributes.price,
                price: ci.product.attributes.price,
                originalPrice: ci.product.attributes.price,
                product: {
                    title: ci.product.attributes.title,
                    slug: ci.product.attributes.slug
                }
            }
            return (
                item
            )
        })
        if (items.length > 0) {
            try {
                await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`,
                    {
                        data: {
                            orderTotal: cart.total?.toFixed(2),
                            customer: checkout.customer,
                            items: items
                        }
                    })
                    .then(response => {
                        console.log('data', response.data);
                    })
                    .catch(error => {
                        console.log('An error occurred:', error.response);
                    });
            } catch (error) {
                console.log("error", error)
                setErrorMessage(error?.toString())
            }
        } else {
            setErrorMessage('Select items to buy')
        }
    }

    const onInvalid: SubmitErrorHandler<CheckoutType> = (data) => {
        console.log('invalid', data, form.getValues())
    }
    return (
        <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
            <Stack pt={4} spacing={4}>
                <CartItems />
                <AddressForm accountData={account} form={form} />
                {/* <PaymentForm /> */}
                <Review form={form} />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {/* {activeStep !== 0 && (
                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                Back
                            </Button>
                        )} */}
                    <Button
                        variant="contained"
                        type='submit'
                        sx={{ mt: 3, ml: 1 }}
                    >
                        {'Place order'}
                    </Button>
                </Box>
            </Stack>
            {errorMessage && <ErrorBox errors={errorMessage} />}
            {errors && <ErrorBox errors={errors} />}
        </form>
    )
}