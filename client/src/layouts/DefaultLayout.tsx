import {Box} from "@mui/material";
import {ReactNode} from "react";

const DefaultLayout = (props: { children: ReactNode }) => {
    return (
        <Box
            id="layout"
            sx={{
                px: 5
            }}
        >
            {props.children}
        </Box>
    )
}

export default DefaultLayout;
