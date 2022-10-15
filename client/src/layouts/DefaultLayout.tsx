import {Avatar, Box, BoxProps} from "@mui/material";
import {FC, PropsWithChildren, ReactNode} from "react";

export interface DefaultLayoutProps extends BoxProps {
    logo?: boolean;
}

const DefaultLayout: FC<PropsWithChildren<DefaultLayoutProps>> = (props) => {
    const {children, logo = false, sx = {}, ...rest} = props;

    return (
        <Box
            id="layout"
            sx={{
                p: 5,
                pt: 8,
                width: '100%',
                height: '100%',
                ...sx,
            }}
            {...rest}
        >
            {logo && (
                <Box position="absolute" left={15} top={15}>
                    <Avatar
                        sx={{
                            width: 30,
                            height: 30,
                        }}
                        alt="$IMX"
                        src="imx_icon_32.png"
                    />
                </Box>
            )}
            {children}
        </Box>
    )
}

export default DefaultLayout;
