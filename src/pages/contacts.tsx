import PixIcon from '@mui/icons-material/Pix';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useRouter } from 'next/router';
import * as React from 'react';
import Layout from '../../components/layout/Layout';
import { getTheme } from '../../components/layout/Theme';
import { PageTitle } from '../../components/layout/Pagetitle';


export default function Contacts() {
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
            })
            .catch(error => {
                console.log('An error occurred:', error.response);
            });
    };


    const theme = getTheme()
    return (
        <Layout>

            <Container component="main" maxWidth="sm">
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <PageTitle title={'Contact us'} />
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                        <TextField
                            variant='standard'
                            margin="normal"
                            required
                            fullWidth
                            id="firstName"
                            label="First name"
                            name="firstName"
                            autoComplete="firstName"
                            autoFocus
                        />
                        <TextField
                            variant='standard'
                            margin="normal"
                            fullWidth
                            id="phone"
                            label="Phone"
                            name="phone"
                            autoComplete="phone"
                            autoFocus
                        />
                        <TextField
                            variant='standard'
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant='standard'
                            margin="normal"
                            required
                            fullWidth
                            name="message"
                            label="Message"
                            type="text"
                            id="message"
                            multiline
                            rows={8}
                        // autoComplete="current-message"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Agree with privacy policy"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Contact
                        </Button>

                    </Box>
                </Paper>
            </Container>
        </Layout>
    );
}