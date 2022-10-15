import {Avatar, Box} from "@mui/material";

import type {FC, PropsWithChildren, ReactNode} from "react";
import type {BoxProps} from "@mui/material";

export interface WalletLayoutProps extends BoxProps {
    logo?: boolean;
    topNode: ReactNode;
    middleNode: ReactNode;
    bottomNode: ReactNode;
}

const WalletLayout: FC<WalletLayoutProps> = (props) => {
    const {logo = false, sx = {}, topNode, middleNode, bottomNode, ...rest} = props;

    return (
        <Box
            id="layout"
            sx={{
                width: '100%',
                height: '100%',
                ...sx,
            }}
            {...rest}
        >
            <Box
                sx={{
                    height: '15%',
                    px: 5,
                    pt: 2,
                    bgcolor: 'grey.400'
                }}
            >
                {topNode}
            </Box>
            <Box
                sx={{
                    height: '75%',
                    px: 5,
                }}
            >
                {middleNode}
            </Box>
            <Box
                sx={{
                    height: '10%',
                    px: 5,
                    bgcolor: 'grey.400'
                }}
            >
                {bottomNode}
            </Box>
        </Box>
    )
}

export default WalletLayout;
