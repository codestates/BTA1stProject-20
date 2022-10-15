import {Avatar, Box} from "@mui/material";
import {ReactNode} from "react";

const DefaultLayout = (props: { children: ReactNode, logo?: boolean }) => {
    const {children, logo = false} = props;

    return (
        <Box
            id="layout"
            sx={{
                p: 5,
                pt: 8,
                width: '100%',
                height: '100%'
            }}
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
