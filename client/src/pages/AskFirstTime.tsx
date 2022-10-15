import {DefaultLayout} from "../layouts";
import {Box, Typography} from "@mui/material";
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
                <ActionCard type="create" />
                <Box mb={1} />
                <ActionCard type="bring" />
            </Box>
        </DefaultLayout>
    )
}

export default AskFirstTime;
