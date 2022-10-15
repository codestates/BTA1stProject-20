import {useMemo} from "react";
import {Box, Button, Typography} from '@mui/material';
import {Add as CreateIcon, BrowserUpdated as BringIcon} from '@mui/icons-material'
import {FullButton} from "../FullButton";
import {noop} from "../../utils";
import {STRINGS} from "../../constants";

import type {FC} from "react";
import type {BoxProps} from '@mui/material';

export interface ActionCardProps {
    type: 'create' | 'bring';
    onClick?: BoxProps['onClick'];
}

export const ActionCard: FC<ActionCardProps> = (props) => {
    const {type, onClick = noop} = props;

    const IconComponent = useMemo(() => {
        return type === 'create' ? CreateIcon : BringIcon;
    }, [type]);

    const labels = useMemo(() => {
        return type === 'create' ? STRINGS.ACTION_CARD.CREATE : STRINGS.ACTION_CARD.BRING;
    }, [type]);

    return (
        <Box
            onClick={onClick}
            sx={[
                {
                    p: 2.75,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid',
                    borderColor: 'grey.400',
                    borderRadius: 1.5,
                    '&:hover': {
                        cursor: 'pointer',
                        opacity: 0.9,
                    }
                }
            ]}
        >
            <IconComponent
                sx={{
                    fontSize: '5rem',
                }}
            />
            <Typography variant="h4">{labels.PRIMARY}</Typography>
            <Typography variant="body2">{labels.SECONDARY}</Typography>
            <FullButton>{labels.BUTTON_LABEL}</FullButton>
        </Box>

    )
}
