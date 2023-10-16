import { CheckoutType } from '@/pages/checkout';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from "@mui/material/FormLabel";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { getTheme } from '../layout/Theme';

type Props = {
    accountData?: AccounDataType;
    form: UseFormReturn<CheckoutType, any, undefined>
}

export type AccounDataType = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    postcode: string;
    address: string;
    city: string;
    country: string;
    subscribed: boolean;
}

export default function AddressForm({ accountData, form }: Props) {
    const theme = getTheme()
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={2} pt={1}>

                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="standard"
                        label={<Typography component={FormLabel} required variant='body2'
                            color={!!form.formState.errors?.customer?.firstName?.message ? 'error' : theme.palette.primary.main}   >
                            {'First name'}
                        </Typography>}
                        size='small' fullWidth
                        {...form.register(`customer.firstName`)}
                        error={!!form.formState.errors?.customer?.firstName?.message}
                        helperText={form.formState.errors?.customer?.firstName?.message}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="standard"
                        label={<Typography component={FormLabel} required variant='body2'
                            color={!!form.formState.errors?.customer?.lastName?.message ? 'error' : theme.palette.primary.main}   >
                            {'Last name'}
                        </Typography>}
                        size='small' fullWidth
                        {...form.register(`customer.lastName`)}
                        error={!!form.formState.errors?.customer?.lastName?.message}
                        helperText={form.formState.errors?.customer?.lastName?.message}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="standard"
                        label={<Typography component={FormLabel} required variant='body2'
                            color={!!form.formState.errors?.customer?.email?.message ? 'error' : theme.palette.primary.main}   >
                            {'Email'}
                        </Typography>}
                        size='small' fullWidth
                        {...form.register(`customer.email`)}
                        error={!!form.formState.errors?.customer?.email?.message}
                        helperText={form.formState.errors?.customer?.email?.message}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="standard"
                        label={<Typography component={FormLabel} required variant='body2'
                            color={!!form.formState.errors?.customer?.address?.message ? 'error' : theme.palette.primary.main}   >
                            {'Address'}
                        </Typography>}
                        size='small' fullWidth
                        {...form.register(`customer.address`)}
                        error={!!form.formState.errors?.customer?.address?.message}
                        helperText={form.formState.errors?.customer?.address?.message}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="standard"
                        label={<Typography component={FormLabel} required variant='body2'
                            color={!!form.formState.errors?.customer?.phone?.message ? 'error' : theme.palette.primary.main}   >
                            {'Phone'}
                        </Typography>}
                        size='small' fullWidth
                        {...form.register(`customer.phone`)}
                        error={!!form.formState.errors?.customer?.phone?.message}
                        helperText={form.formState.errors?.customer?.phone?.message}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="standard"
                        label={<Typography component={FormLabel} required variant='body2'
                            color={!!form.formState.errors?.customer?.city?.message ? 'error' : theme.palette.primary.main}   >
                            {'City'}
                        </Typography>}
                        size='small' fullWidth
                        {...form.register(`customer.city`)}
                        error={!!form.formState.errors?.customer?.city?.message}
                        helperText={form.formState.errors?.customer?.city?.message}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="standard"
                        label={<Typography component={FormLabel} required variant='body2'
                            color={!!form.formState.errors?.customer?.postcode?.message ? 'error' : theme.palette.primary.main}   >
                            {'Postcode'}
                        </Typography>}
                        size='small' fullWidth
                        {...form.register(`customer.postcode`)}
                        error={!!form.formState.errors?.customer?.postcode?.message}
                        helperText={form.formState.errors?.customer?.postcode?.message}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="standard"
                        label={<Typography component={FormLabel} required variant='body2'
                            color={!!form.formState.errors?.customer?.country?.message ? 'error' : theme.palette.primary.main}   >
                            {'Country'}
                        </Typography>}
                        size='small' fullWidth
                        {...form.register(`customer.country`)}
                        error={!!form.formState.errors?.customer?.country?.message}
                        helperText={form.formState.errors?.customer?.country?.message}
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