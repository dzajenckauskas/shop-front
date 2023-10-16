import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import axios from 'axios';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useAppSelector } from '../../app/hooks';
import { CartItems } from '../../components/CartItems';
import AddressForm from '../../components/forms/AddressForm';
import PaymentForm from '../../components/forms/PaymentForm';
import Review from '../../components/forms/Review';
import Layout from '../../components/layout/Layout';
import { PageTitle } from '../../components/layout/Pagetitle';
import { selectCart } from '../../components/shared/cart/cartSlice';

const steps = ['Cart', 'Shipping', 'Payment', 'Review'];

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <CartItems />;
        case 1:
            return <AddressForm />;
        case 2:
            return <PaymentForm />;
        case 3:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [accountData, setAccountData] = React.useState<any>()
    const cart = useAppSelector(selectCart)
    const router = useRouter()
    const [emailSent, setEmailSent] = React.useState(false);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    console.log(emailSent, "emailSentemailSentemailSentemailSent");

    React.useEffect(() => {
        const id = sessionStorage.getItem('userId');
        if (id) {

            axios
                .get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}?populate=*`)
                .then((response) => {
                    console.log(response.data, 'GET response');

                    setAccountData(response.data)
                })
                .catch(err => console.log(`Error: ${err}`))
        }
    }, [])
    console.log(cart);

    const handleSubmit = async () => {
        // event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log(data, "data");
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
        console.log(items);

        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`,
            {
                data: {
                    orderTotal: cart.total?.toFixed(2),
                    customer: {
                        firstName: accountData?.firstName,
                        lastName: accountData?.lastName,
                        phone: accountData?.phone,
                        email: accountData?.email,
                        // isBusiness: false

                    },
                    items: items
                }
                // username: data.get('username'),
                // username: data.get('username'),
                // email: data.get('email'),
                // password: data.get('password'),
                // allowExtraEmails: data.get('subscribed'),
            })
            .then(response => {
                // console.log('User profile', response.data.user);
                console.log('data', response.data);
                // sessionStorage.setItem('jwt', response.data.jwt);
                // router.push('/thank-you')
            })
            .catch(error => {
                console.log('An error occurred:', error.response);
            });

        // https://www.youtube.com/watch?v=t2LvPXHLrek&t=109s&ab_channel=OnelightWebDev
    };

    return (
        <Layout>
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <PageTitle title='Checkout' />
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <CartItems />
                    <AddressForm accountData={accountData} />
                    {/* <PaymentForm /> */}
                    <Review accountData={accountData} />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {/* {activeStep !== 0 && (
                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                Back
                            </Button>
                        )} */}
                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            sx={{ mt: 3, ml: 1 }}
                        >
                            {'Place order'}
                        </Button>
                        {emailSent && <p>Email sent successfully!</p>}
                    </Box>
                    {/* {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                                Thank you for your order.
                            </Typography>
                            <Typography variant="subtitle1">
                                Your order number is #2001539. We have emailed your order
                                confirmation, and will send you an update when your order has
                                shipped.
                            </Typography>
                            <Box mt={4}>
                                <Link style={{ marginLeft: 'auto', alignSelf: 'center', fontWeight: 600 }}
                                    passHref href={`/products`}>
                                    <Button
                                        size="medium"
                                        color="primary"
                                        variant='contained'
                                        aria-label={`View products`}
                                    >
                                        Shop more
                                    </Button>
                                </Link>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )} */}

                </Paper>
            </Container>
        </Layout>
    );
}
