import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { LoginForm } from '../../components/forms/LoginForm';
import Layout from '../../components/layout/Layout';
import { PageTitle } from '../../components/layout/Pagetitle';

export default function SignIn() {
    return (
        <Layout>
            <Container component="main" maxWidth="sm">
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <PageTitle title={'Sign in'} />
                    <LoginForm />
                </Paper>
            </Container>
        </Layout>
    );
}