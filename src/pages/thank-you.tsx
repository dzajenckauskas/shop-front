import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Review from '../../components/forms/Review';
import Layout from '../../components/layout/Layout';
import { PageTitle } from '../../components/layout/Pagetitle';

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
