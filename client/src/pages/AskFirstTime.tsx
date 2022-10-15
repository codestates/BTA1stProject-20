import {DefaultLayout} from "../layouts";
import {Avatar, Box, Button, Typography} from "@mui/material";
import {STRINGS} from "../constants";
import {FullButton} from "../components/FullButton";
import {Link} from "react-router-dom";
import {ActionCard} from "../components/ActionCard";

const AskFirstTime = () => {
    return (
        <DefaultLayout logo>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box width="100%" mb={1}>
                    <Typography variant="h4">처음이신가요?</Typography>
                </Box>
                <ActionCard
                    type="create"
                    onClick={() => console.log('hello')}
                />
                <Box mb={1} />
                <ActionCard
                    type="bring"
                    onClick={() => console.log('hello')}
                />
            </Box>
        </DefaultLayout>
    )
}

export default AskFirstTime;
