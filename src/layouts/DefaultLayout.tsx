import {Box} from "@mui/material";
import {ReactNode} from "react";

const DefaultLayout = (props: {children: ReactNode}) => {
    return (
        <Box>
            {props.children}
        </Box>
    )
}

export default DefaultLayout;