import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
type Props = {
  amount: number;
  setAmount: (v: number) => void;
  maxValue?: number;
  minValue?: number;
}

export const NumberInput = ({ amount, setAmount, minValue, maxValue }: Props) => {
  return (
    <Stack direction={'row'} spacing={1} alignItems={'center'}>
      <IconButton sx={{ height: 30, width: 30 }} aria-label="decrease" size="small" onClick={() => setAmount(amount === minValue ? minValue : (amount - 1))}>
        <RemoveIcon fontSize="small" />
      </IconButton>
      <Stack sx={{ maxWidth: 40 }}>
        <TextField
          size='small'
          sx={{
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
              display: "none",
            },
            "& input[type=number]": {
              MozAppearance: "textfield",
            },
          }}
          type='number'
          InputProps={{ inputProps: { min: minValue ?? 0, max: maxValue ?? null } }}
          value={amount}
          id="phone"
        />
      </Stack>
      <IconButton sx={{ height: 30, width: 30 }} aria-label="increase" size="small" onClick={() => setAmount(amount + 1)}>
        <AddIcon fontSize="small" />
      </IconButton>
    </Stack>
  )
}