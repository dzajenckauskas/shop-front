import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import AddressForm from '../../components/forms/AddressForm';
import PaymentForm from '../../components/forms/PaymentForm';
import Review from '../../components/forms/Review';
import Layout from '../../components/layout/Layout';
import Link from 'next/link'
import { PageTitle } from '../../components/layout/Pagetitle';
import { CheckoutItems } from '../../components/CheckoutItems';


const steps = ['Checkout', 'Shipping', 'Payment', 'Review'];

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <CheckoutItems />;
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

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    return (
        <Layout>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <PageTitle title='Checkout' />
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
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
                    )}
                </Paper>
            </Container>
        </Layout>
    );
}