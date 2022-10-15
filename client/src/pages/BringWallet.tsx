import {useNavigate} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import {DefaultLayout} from "../layouts";
import {ButtonPair, MnemonicInput, PasswordInput} from "../components";

const BringWallet = () => {
    const navigate =  useNavigate();

    return (
        <DefaultLayout logo>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'space-between'
                }}
            >
                <Box>
                    <Box width="100%" mb={6}>
                        <Typography variant="h4">지갑 가져오기</Typography>
                    </Box>
                    <Box
                        width="100%"
                        gap={4}
                        display="flex"
                        flexDirection="column"
                    >
                        <MnemonicInput label="seed phrase 입력" />
                        <PasswordInput label="비밀번호(8자 이상)" variant="outlined" />
                        <PasswordInput label="비밀번호 확인" variant="outlined" />
                    </Box>
                </Box>
                <Box>
                    <ButtonPair
                        onPrevButtonClick={() => {
                            navigate(-1);
                        }}
                        onNextButtonClick={() => {
                            navigate('/');
                        }}
                    />
                </Box>
            </Box>
        </DefaultLayout>
    )
}

export default BringWallet;
