import {DefaultLayout} from "../layouts";
import {Avatar, Box, Typography} from "@mui/material";
import {STRINGS} from "../constants";
import {FullButton} from "../components";
import {Link} from "react-router-dom";

const Start = () => {
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
                    src="imx_icon_334.png"
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
                    <Link to="/first-time">
                        <FullButton>
                            시작하기
                        </FullButton>
                    </Link>
                </Box>
            </Box>
        </DefaultLayout>
    )
}

export default Start;
