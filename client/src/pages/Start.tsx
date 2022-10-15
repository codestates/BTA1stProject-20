import {DefaultLayout} from "../layouts";
import {Avatar, Box, Button, Typography} from "@mui/material";
import {STRINGS} from "../constants";
import {FullButton} from "../components/FullButton";
import {Link} from "react-router-dom";

const Start = () => {
    return (
        <DefaultLayout>
            <Box
                mt={14}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Avatar
                    sx={{
                        width: 140,
                        height: 140,
                    }}
                    alt="$IMX"
                    src="imx_icon_334.png"
                />
                <Box mt={2}>
                    <Typography variant="h5">{`${STRINGS.GLOBAL.PROJECT_NAME} 방문을 환영합니다.`}</Typography>
                </Box>
                <Box width="100%">
                    <Typography variant="body2">{STRINGS.GLOBAL.PROJECT_DESCRIPTION}</Typography>
                </Box>
                <Box flex={1} width="100%">
                    <Link to="/page1">
                        <FullButton >
                            시작하기
                        </FullButton>
                    </Link>
                </Box>
            </Box>
        </DefaultLayout>
    )
}

export default Start;
