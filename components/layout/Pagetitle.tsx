import PixIcon from '@mui/icons-material/Pix';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { getTheme } from "./Theme";

type Props = {
    title: string;
    main?: boolean;
    showIcon?: boolean;
}

export const PageTitle = ({ title, main, showIcon }: Props) => {
    const theme = getTheme()
    return (
        <>
            {!main &&
                <Stack direction={'row'} alignItems={'center'} spacing={1.5}>
                    {showIcon && <PixIcon fontSize='small' sx={{ color: theme.palette.secondary.main }} />}
                    <Typography component="h1" variant="h4" fontWeight={500}>
                        {title}
                    </Typography>
                </Stack>}
            {main &&
                <Stack direction={'row'}>
                    <Typography component="h1" variant="h1" fontWeight={500} textAlign={'center'} pb={4}>
                        {title}
                    </Typography>
                </Stack>
            }
        </>
    )
}