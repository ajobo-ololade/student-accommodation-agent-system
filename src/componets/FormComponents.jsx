import { TextField } from "@mui/material"
import { Button } from '@mui/material';

export const Textfield = ({ id, label, type, helperText, error, onBlur, onChange, value }) => {
    return (

        <TextField

            id={id}
            label={label}
            variant="outlined"
            sx={{ width: '35ch', }}
            size='small'
            required
            fullWidth
            type={type}
            error={error}
            helperText={helperText}
            autoComplete="email"
        />
    )
}

export const FormButton = ({ variant, text }) => {
    return (
        <Button
            variant="contained"
            sx={{ width: '100%' }}
        >
            {text}
        </Button>
    )
}