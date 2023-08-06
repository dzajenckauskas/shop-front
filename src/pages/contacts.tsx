import PixIcon from '@mui/icons-material/Pix';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useRouter } from 'next/router';
import * as React from 'react';
import Layout from '../../components/layout/Layout';
import { getTheme } from '../../components/layout/Theme';


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

            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#fff' }}>
                        <PixIcon fontSize='large' sx={{ color: theme.palette.secondary.main }} />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Contact us
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                        <TextField
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
                            margin="normal"
                            fullWidth
                            id="phone"
                            label="Phone"
                            name="phone"
                            autoComplete="phone"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
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
                </Box>
            </Container>
        </Layout>
    );
}