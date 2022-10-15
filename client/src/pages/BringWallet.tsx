import {DefaultLayout} from "../layouts";
import {Box, Typography} from "@mui/material";
import {ActionCard, PasswordInput} from "../components";

const BringWallet = () => {
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
                    <Typography variant="h4">비밀번호 만들기</Typography>
                </Box>
                <Box>
                    <PasswordInput variant="outlined" />
                </Box>
                <ActionCard type="create" />
                <Box mb={1} />
                <ActionCard type="bring" />
            </Box>
        </DefaultLayout>
    )
}

export default BringWallet;
