import {Box} from "@mui/material";
import {ReactNode} from "react";

const DefaultLayout = (props: { children: ReactNode }) => {
    return (
        <Box
            id="layout"
            sx={{
                px: 5,
                width: '100%',
                height: '100%'
            }}
        >
            {props.children}
        </Box>
    )
}

export default DefaultLayout;
