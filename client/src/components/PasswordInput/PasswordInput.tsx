import {OutlinedTextFieldProps, TextField} from '@mui/material';
import {noop} from "../../utils";

import type {FC} from "react";

export interface PasswordInputProps extends OutlinedTextFieldProps {
}

export const PasswordInput: FC<PasswordInputProps> = (props) => {
    const {label = 'label', ...rest} = props;

    return (
        <TextField
            {...rest}
            fullWidth
            size="small"
            label={label}
            autoComplete="current-password"
            type="password"
            variant="outlined"
        />
    );
}
