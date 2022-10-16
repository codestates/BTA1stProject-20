import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {DefaultLayout} from "../layouts";
import {Avatar, Box, Typography} from "@mui/material";
import {STRINGS} from "../constants";
import {FullButton, PasswordInput} from "../components";

const WelcomeBack = () => {
    const navigate = useNavigate();

    return (
        <DefaultLayout>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Avatar
                    sx={{
                        width: 140,
                        height: 140,
                    }}
                    alt="$IMX"
                />
                <Box>
                    <Box mt={2}>
                        <Typography variant="h5">{STRINGS.WELCOME_BACK.DESCRIPTION}</Typography>
                    </Box>
                    <Box width="100%">
                        <Typography variant="body2">{STRINGS.WELCOME_BACK.WARNING}</Typography>
                    </Box>
                </Box>
                <Box width="100%">
                    <PasswordInput
                        label="비밀번호 입력"
                        variant="outlined"
                    />
                </Box>
                <Box width="100%">
                    <FullButton
                        onClick={() => {
                            navigate('/first-time')
                        }}
                    >
                        잠금 해제
                    </FullButton>
                </Box>
            </Box>
        </DefaultLayout>
    )
}

export default WelcomeBack;
