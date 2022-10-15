import {Avatar, Box, Typography} from '@mui/material';
import {noop, getRandomColorFromString} from "../../utils";

import type {FC} from "react";
import type {BoxProps} from '@mui/material';

export interface CoinCardProps {
    name: string;
    ticker: string;
    balance: number | string;
    onClick?: BoxProps['onClick'];
}

export const CoinCard: FC<CoinCardProps> = (props) => {
    const {name, ticker, balance, onClick = noop} = props;

    return (
        <Box
            onClick={onClick}
            sx={{
                p: 2.75,
                mx: 2,
                display: 'flex',
                gap: 2,
                border: '1px solid',
                borderColor: 'grey.400',
                borderRadius: 1.5,
                '&:hover': {
                    cursor: 'pointer',
                    bgcolor: 'grey.50',
                    opacity: 0.8,
                }
            }}
        >
            {/* TODO: icon 추가*/}
            <Avatar sx={{ bgcolor: getRandomColorFromString(name) }}>{name?.charAt(0)}</Avatar>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography variant="body2">{name}</Typography>
                <Typography variant="body2">{`${balance} ${ticker}`}</Typography>
            </Box>
        </Box>
    );
}
