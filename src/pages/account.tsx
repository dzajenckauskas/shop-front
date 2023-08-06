import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Layout from '../../components/layout/Layout';
import { PageTitle } from '../../components/layout/Pagetitle';
import { getTheme } from '../../components/layout/Theme';
import axios from 'axios'
import { useEffect, useState } from 'react';


export type AccountData = {
  id?: number;
  email?: string;
  username?: string;
  firstName?: string;
  lastName?: string;

}
export default function Account() {

  const [accountData, setAccountData] = useState<AccountData>()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    event.preventDefault();
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      subscribed: data.get('subscribed'),
    });
    axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${accountData?.id}`, {
        username: data.get('username'),
        email: data.get('email'),
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        subscribed: data.get('subscribed') ? true : false,
      })
      .then((response) => {
        console.log(accountData);
        // setAccountData(response.data)
        console.log(response.data)
      })
      .catch(err => console.log(`Error: ${err}`))
  };
  console.log(accountData);

  useEffect(() => {
    const id = sessionStorage.getItem('userId');
    console.log(sessionStorage);

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`)
      .then((response) => {
        setAccountData(response.data)
      })
      .catch(err => console.log(`Error: ${err}`))

  }, [])

  const updateAccount = () => {

  }
  return (
    <Layout>
      <Container component="main" maxWidth="sm">
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>


          <PageTitle title={'Account'} />
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='standard'
                  InputLabelProps={{
                    shrink: true,
                  }}

                  autoComplete="given-name"
                  name="firstName"
                  value={accountData?.firstName}
                  // onChange={(e) => { setAccountData({ ...accountData, firstName: e.target.value }) }}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='standard'
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
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" name='subscribed' />}
                  label="I want to receive emails from you."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={updateAccount}
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