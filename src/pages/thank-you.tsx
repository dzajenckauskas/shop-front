import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Review from '../../components/forms/Review';
import Layout from '../../components/layout/Layout';
import { PageTitle } from '../../components/layout/Pagetitle';
import sendEmail from './api/sendMail';

export default function Checkout() {
    return (
        <Layout>
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <PageTitle title='Thank you!' main />
                    <Review />
                </Paper>
            </Container>
        </Layout>
    );
}

export const getStaticProps = async () => {



    const sendTestEmail = async () => {
        try {
            await sendEmail('danielius@ideaformus.lt', `Just completed order or visited thank-you page`, 'This is a test email from Next.js and Nodemailer.');
        } catch (error) {
            console.error(error);
        }
    };
    await sendTestEmail()
    return {
        props: {

        }
    }

}