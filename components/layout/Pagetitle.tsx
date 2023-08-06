import PixIcon from '@mui/icons-material/Pix';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { getTheme } from "./Theme";

type Props = {
    title: string;
}

export const PageTitle = ({ title }: Props) => {
    const theme = getTheme()
    return (
        <Stack direction={'row'} alignItems={'center'} spacing={1.5}>
            <PixIcon fontSize='small' sx={{ color: theme.palette.secondary.main }} />
            <Typography component="h1" variant="h4" fontWeight={500}>
                {title}
            </Typography>
            {/* <PixIcon fontSize='small' sx={{ width: 16, color: theme.palette.secondary.main }} /> */}
        </Stack>
    )
}