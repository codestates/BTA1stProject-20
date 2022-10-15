import {Box, TextField} from '@mui/material';

import type {FC} from "react";
import type {OutlinedTextFieldProps} from '@mui/material';

export interface PasswordInputProps extends OutlinedTextFieldProps {
}

export const PasswordInput: FC<PasswordInputProps> = (props) => {
    const {label = 'label', ...rest} = props;

    return (
        <Box mx={2}>
            <TextField
                {...rest}
                fullWidth
                label={label}
                autoComplete="current-password"
                type="password"
                variant="outlined"
            />
        </Box>
    );
}
