import { Stack, Typography } from "@mui/material";
import { getTheme } from "../layout/Theme";

type Props = {
  message: string;
};

const Message = ({ message }: Props) => {
  const theme = getTheme()
  return (
    <Stack sx={{ mt: 1 }}>
      <Typography lineHeight={1.4} color={theme.palette.secondary.main} variant="caption">{message}</Typography>
    </Stack>
  );
};

export default Message;
