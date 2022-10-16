import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {DefaultLayout} from "../layouts";
import {Avatar, Box, Typography} from "@mui/material";
import {STRINGS} from "../constants";
import {FullButton} from "../components";

const Start = () => {
    const navigate = useNavigate();

    // mnemonic이 있으면 WelcomeBack page로 이동.
    useEffect(() => {
        if (chrome?.storage?.local) {
            chrome.storage.local.get(['mnemonic'], function(result) {
                alert('Value mnemonic is ' + result.mnemonic);
                navigate('/welcome-back');
            });
        }
    }, []);

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
                    src="/imx_icon_334.png"
                />
                <Box>
                    <Box mt={2}>
                        <Typography variant="h5">{`${STRINGS.GLOBAL.PROJECT_NAME} 방문을 환영합니다.`}</Typography>
                    </Box>
                    <Box width="100%">
                        <Typography variant="body2">{STRINGS.GLOBAL.PROJECT_DESCRIPTION}</Typography>
                    </Box>
                </Box>
                <Box width="100%">
                    <FullButton
                        onClick={() => {
                            navigate('/first-time')
                        }}
                    >
                        시작하기
                    </FullButton>
                </Box>
            </Box>
        </DefaultLayout>
    )
}

export default Start;
