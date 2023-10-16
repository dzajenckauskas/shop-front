import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from "axios";
import Link from "next/link";
import { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { getTheme } from "../layout/Theme";
import ErrorBox from "../shared/ErrorBox";
import Message from "../shared/Message";

type RegisterInputType = {
    email: string;
    password: string;
    username: string;
    subscribed: boolean;
    acceptTerms: boolean;
};

export const RegisterForm = () => {
    const registerInputSchema = yup.object({
        username: yup.string().required(`Required field`),
        email: yup.string().email(`Email not valid`).required(`Required field`),
        password: yup.string().required(`Required field`),
        acceptTerms: yup.boolean().oneOf([true], `Required field`).defined(),
        subscribed: yup.boolean().nullable()
    }).required()

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<RegisterInputType>({
        resolver: yupResolver(registerInputSchema as any)
    })
    const [error, setError] = useState<string | undefined>()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState<string | undefined>()

    const submit: SubmitHandler<RegisterInputType> = async (data: RegisterInputType) => {
        setLoading(true)
        setError(undefined)
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local/register`,
            {
                username: data.username,
                email: data.email,
                password: data.password,
                allowExtraEmails: data.subscribed,
                acceptTerms: data.acceptTerms
            })
            .then(response => {
                if (response.data)
                    setMessage('Confirmation email was sent.')
            })
            .catch(error => {
                console.log('An error occurred:', error.response);
                setError(error.response.data.error.message)
            });
        setLoading(false)
    }

    const theme = getTheme()
    const acceptTerms = watch(`acceptTerms`) ?? false
    const subscribe = watch(`subscribed`) ?? false
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Stack spacing={1} textAlign={'left'} pt={2}>
                <Stack spacing={1.5} pb={1}>
                    <TextField
                        variant="standard"
                        label={<Typography component={FormLabel} required variant='body2'
                            color={!!errors?.username?.message ? 'error' : theme.palette.primary.main}   >
                            {'Username'}
                        </Typography>}
                        size='small' fullWidth
                        {...register(`username`)}
                        error={!!errors?.username?.message}
                        helperText={errors?.username?.message}
                    />
                    <TextField
                        variant="standard"
                        label={<Typography component={FormLabel} required variant='body2'
                            color={!!errors?.email?.message ? 'error' : theme.palette.primary.main}   >
                            {'Email'}
                        </Typography>}
                        size='small' fullWidth
                        {...register(`email`)}
                        error={!!errors?.email?.message}
                        helperText={errors?.email?.message}
                    />
                    <TextField
                        variant="standard"
                        label={<Typography component={FormLabel} required variant='body2'
                            color={!!errors?.password?.message ? 'error' : theme.palette.primary.main}   >
                            {'Password'}
                        </Typography>}
                        size='small' fullWidth
                        {...register(`password`)}
                        error={!!errors?.password?.message}
                        helperText={errors?.password?.message}
                        type="password"
                    />
                    <Stack>
                        <FormControl sx={{ marginBottom: -1.5 }}>
                            <FormControlLabel
                                label={<Typography component={FormLabel} sx={{ cursor: 'pointer' }}
                                    required color={errors.acceptTerms?.message ? theme.palette.error.main : theme.palette.primary.main} >
                                    <span onClick={() => setValue('acceptTerms', !acceptTerms)}>
                                        {'Agree with '}&nbsp;
                                    </span>
                                    <Link prefetch={false} href={`/privacy-policy`} passHref>
                                        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>{'Privacy policy'}</span>
                                    </Link>
                                </Typography>}
                                id={'acceptTerms'}
                                htmlFor={'acceptTerms'}
                                control={
                                    <Checkbox disableRipple
                                        checked={acceptTerms}
                                        sx={{
                                            [`&, &.${checkboxClasses.checked}`]: {
                                                color: errors.acceptTerms?.message ? theme.palette.error.main : theme.palette.primary.main
                                            },
                                        }}
                                        {...register('acceptTerms')}
                                    />}
                            />
                            {errors.acceptTerms?.message && <Stack mt={-1.5} mb={1.5}>
                                <FormHelperText sx={{ color: theme.palette.error.main }}>
                                    {errors.acceptTerms?.message}
                                </FormHelperText>
                            </Stack>}
                        </FormControl>
                        <FormControl>
                            <FormControlLabel
                                label={<Typography component={FormLabel} sx={{ cursor: 'pointer' }} onClick={() => setValue('subscribed', !subscribe)}
                                    color={errors.subscribed?.message ? theme.palette.error.main : theme.palette.primary.main} >
                                    {'Subscribe to a newsletter'}
                                </Typography>}
                                id={'subscribe'}
                                htmlFor={'subscribe'}
                                control={
                                    <Checkbox disableRipple
                                        checked={subscribe}
                                        sx={{
                                            [`&, &.${checkboxClasses.checked}`]: {
                                                color: errors.subscribed?.message ? theme.palette.error.main : theme.palette.primary.main
                                            },
                                        }}
                                        {...register('subscribed')}
                                    />}
                            />
                        </FormControl>
                    </Stack>
                </Stack>

                <LoadingButton loading={loading} variant='contained' sx={{ marginX: 4, height: '35px', fontSize: '14px' }}
                    type="submit">
                    {"Login"}
                </LoadingButton>

                {!loading && error && <ErrorBox errors={error} />}
                {!loading && !error && message && <Message message={message} />}

                <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
                    <Stack direction={'row'}>
                        <Typography fontWeight={500} fontSize={'12px'} maxWidth={'fit-content'} color={'#192357'}>
                            {'Already registered?'}
                        </Typography>
                        <Link passHref href={'/login'}>
                            <Typography fontWeight={500} fontSize={'12px'} maxWidth={'fit-content'} color={'#192357'} sx={{ cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}>
                                &nbsp;{'Login!'}
                            </Typography>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </form>
    )
}