import {Box, IconButton, TextField, Tooltip} from '@mui/material';
import {ContentCopy as ContentCopyIcon} from '@mui/icons-material';

import type {FC} from "react";
import type {OutlinedTextFieldProps} from '@mui/material';

export interface MnemonicInputProps extends OutlinedTextFieldProps {
    onCopyText?: (() => void) | null;
}

export const MnemonicInput: FC<MnemonicInputProps> = (props) => {
    const {label = 'label', onCopyText, ...rest} = props;

    return (
        <Box mx={2} position="relative">
            <TextField
                {...rest}
                multiline
                fullWidth
                minRows={4}
                maxRows={6}
                label={label}
                autoComplete="current-password"
                variant="outlined"
            />
            {onCopyText && (
                <Tooltip title="복사하기">
                    <IconButton
                        sx={{
                            position: 'absolute',
                            right: 2,
                            bottom: 2,
                            bgcolor: 'background.default'
                        }}
                        onClick={onCopyText}
                    >
                        <ContentCopyIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Box>
    );
}
