import {Box, FormControl, MenuItem, Select} from '@mui/material';

import type {FC} from "react";
import type {SelectProps} from '@mui/material';

export interface NetworkSelectorProps extends SelectProps {
    options: { label: string; value: string; }[];
}

export const NetworkSelector: FC<NetworkSelectorProps> = (props) => {
    const {options, value, onChange} = props;

    return (
        <Box mx={1}>
            <FormControl fullWidth size="small">
                <Select value={value} onChange={onChange}>
                    {options.map(({label, value}) => {
                        return (
                            <MenuItem value={value}>{label}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}
