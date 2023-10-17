import { yupResolver } from "@hookform/resolvers/yup";
import GoogleIcon from '@mui/icons-material/Google';
import { LoadingButton } from "@mui/lab";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { signIn } from 'next-auth/react';
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { useAppDispatch } from "../../app/hooks";
import { getTheme } from "../layout/Theme";
import ErrorBox from "../shared/ErrorBox";
import { performLogin } from "../shared/auth/accountSlice";

export type CredentialsType = {
    email: string;
    password: string;
};

type Props = {
    checkout?: boolean;
}

export const LoginForm = ({ checkout }: Props) => {
    const router = useRouter()
    const dispatch = useAppDispatch();

    const { checkout: isCheckout } = router.query
    const callbackUrl = (isCheckout ?? checkout) ? "/checkout" : "/"

    const credentialsSchema = yup.object({
        email: yup.string().email(`Email not valid`).required(`Required field`),
        password: yup.string().required(`Required field`),
    }).required()

    const { register, handleSubmit, formState: { errors } } = useForm<CredentialsType>({
        resolver: yupResolver(credentialsSchema),
    })

    const [error, setError] = useState<string | undefined>()
    const [loading, setLoading] = useState(false)

    const submit: SubmitHandler<CredentialsType> = async (
        credentials: CredentialsType
    ) => {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
            {
                identifier: credentials.email,
                password: credentials.password,
            })
            .then(response => {
                sessionStorage.setItem('jwt', response.data.jwt);
                sessionStorage.setItem('userId', response.data.user.id);

                dispatch(performLogin(response.data));
                router.push(callbackUrl)
            })
            .catch(error => {
                console.log('An error occurred:', error.response);
                setError(error.response.data.error.message)
            });
    }

    const socialLoginHandler = async (provider: string) => {
        setError(undefined)
        setLoading(true)

        await signIn(provider,
            {
                redirect: false,
                callbackUrl: ((isCheckout ?? checkout) ? "/uzsakymas" : "/"),
            }).then((data) => {
                if (data?.error) {
                    setError(data?.error)
                } else {
                    setError(undefined)
                    router.push("/");
                }
            }).catch((err) => {
                setError(err)
                console.log(err, "err");
            })
        setLoading(false)
    }
    const theme = getTheme()
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Stack spacing={1} textAlign={'left'} pt={2}>
                <Stack spacing={1.5} pb={1}>
                    <TextField
                        variant="standard"
                        label={<Typography component={FormLabel} required variant='body1'
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
                        label={<Typography component={FormLabel} required variant='body1'
                            color={!!errors?.password?.message ? 'error' : theme.palette.primary.main}   >
                            {'Password'}
                        </Typography>}
                        size='small' fullWidth
                        {...register(`password`)}
                        error={!!errors?.password?.message}
                        helperText={errors?.password?.message}
                        type="password"
                    />
                </Stack>
                <LoadingButton loading={loading} variant='contained' sx={{ marginX: 4, height: '35px', fontSize: '14px' }}
                    type="submit">
                    {"Login"}
                </LoadingButton>
                <Button variant='outlined' onClick={() => socialLoginHandler('google')}
                    sx={{ marginX: 4, height: '35px', fontSize: '14px', marginBottom: 1, textTransform: 'none' }}
                    endIcon={<GoogleIcon />}>
                    {'Login with'.toUpperCase()}
                </Button>
                {error && <ErrorBox errors={error} />}

                <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
                    <Link passHref href={'/reset-password'}>
                        <Typography fontWeight={500} fontSize={'12px'} maxWidth={'fit-content'} color={'#192357'} sx={{ cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}>
                            {'Forgot password?'}
                        </Typography>
                    </Link>
                    <Stack direction={'row'}>
                        <Typography fontWeight={500} fontSize={'12px'} maxWidth={'fit-content'} color={'#192357'}>
                            {'Not registered?'}
                        </Typography>
                        <Link passHref href={'/register'}>
                            <Typography fontWeight={500} fontSize={'12px'} maxWidth={'fit-content'} color={'#192357'} sx={{ cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}>
                                &nbsp;{'Register!'}
                            </Typography>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </form>
    )
}