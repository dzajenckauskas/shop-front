import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { PageTitle } from '../../components/layout/Pagetitle';

export type AccountData = {
  id?: number;
  email?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  country?: string;
  postcode?: string;
  phone?: string;
  address?: string;
  address2?: string;
  subscribed?: boolean;
}
export default function Account() {

  const [accountData, setAccountData] = useState<AccountData>()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    event.preventDefault();
    axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${accountData?.id}`, {
        username: data.get('username'),
        email: data.get('email'),
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        address: data.get('address'),
        address2: data.get('address2'),
        country: data.get('country'),
        city: data.get('city'),
        postcode: data.get('postcode'),
        phone: data.get('phone'),
        subscribed: data.get('subscribed')
      })
      .then((response) => {
        setAccountData(response.data)
      })
      .catch(err => console.log(`Error: ${err}`))
  };

  useEffect(() => {
    const id = sessionStorage.getItem('userId');
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}?populate=*`)
      .then((response) => {
        console.log(response.data, 'GET response');

        setAccountData(response.data)
      })
      .catch(err => console.log(`Error: ${err}`))
  }, [])


  return (
    <Layout>
      <Container component="main" maxWidth="sm">
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>


          <PageTitle title={'Account'} />
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoFocus
                  variant='standard'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  fullWidth
                  value={accountData?.username}
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='standard'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  fullWidth
                  value={accountData?.email}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant='standard'
                  InputLabelProps={{
                    shrink: true,
                  }}

                  autoComplete="given-name"
                  name="firstName"
                  value={accountData?.firstName}
                  fullWidth
                  id="firstName"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='standard'
                  value={accountData?.lastName}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='standard'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  value={accountData?.phone}
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='standard'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  value={accountData?.postcode}
                  id="postcode"
                  label="Postcode"
                  name="postcode"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='standard'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  value={accountData?.address}
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='standard'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  value={accountData?.city}
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='standard'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  value={accountData?.country}
                  id="country"
                  label="Country"
                  name="country"
                  autoComplete="family-name"
                />
              </Grid>


              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value={accountData?.subscribed} color="primary" checked={accountData?.subscribed} name='subscribed' />}
                  label="I want to receive emails from you."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/change-password" variant="body2">
                  Change password
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Layout>

  );
}