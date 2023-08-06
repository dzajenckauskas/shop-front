import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useRouter } from 'next/router';
import * as React from 'react';
import Layout from '../../components/layout/Layout';
import { PageTitle } from '../../components/layout/Pagetitle';


export default function ChangePassword() {
    const router = useRouter();



    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            identifier: data.get('email'),
            password: data.get('password'),
        });

        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
            {
                identifier: 'dan',
                password: 'dandan'
                // identifier: data.get('email'),
                // password: data.get('password'),
            })
            .then(response => {
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
                sessionStorage.setItem('jwt', response.data.jwt);
                router.push('/')
            })
            .catch(error => {
                console.log('An error occurred:', error.response);
            });
    };


    return (
        <Layout>

            <Container component="main" maxWidth="sm">
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <PageTitle title={'Change password'} />
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                        <TextField
                            variant='standard'

                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            variant='standard'
                            margin="normal"
                            required
                            fullWidth
                            name="oldPassword"
                            label="Old Password"
                            type="password"
                            id="old-password"
                            autoComplete="old-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Change
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/account" variant="body2">
                                    See profile
                                </Link>
                            </Grid>
                            {/* <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid> */}
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </Layout>
    );
}