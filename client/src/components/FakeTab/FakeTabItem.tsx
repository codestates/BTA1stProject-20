import {Box, Tooltip, Typography} from '@mui/material';

import type {FC} from "react";
import type {SvgIconComponent} from '@mui/icons-material';

export interface FakeTabItemProps {
    active: boolean;
    label: string;
    path: string;
    icon: SvgIconComponent;
}


export const FakeTabItem: FC<FakeTabItemProps> = (props) => {
    const {active = false, label, path, icon: Icon} = props;
    return (
        <Box
            mx={2}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: active ? 1 : 0.2,
                '&:hover': {
                    cursor: 'pointer',
                    opacity: 0.8,
                }
            }}
        >
            <Icon />
            <Typography variant="subtitle2">{label}</Typography>
        </Box>
    );
}
