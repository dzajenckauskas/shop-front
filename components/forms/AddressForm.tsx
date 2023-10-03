import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { AccountData } from '@/pages/account';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AddressForm() {
    const [accountData, setAccountData] = useState<AccountData>()

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
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={2} pt={1}>
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
                        autoFocus
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
        </React.Fragment >
    );
}