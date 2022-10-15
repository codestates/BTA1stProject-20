import {DefaultLayout} from "../layouts";
import {Box, Typography} from "@mui/material";
import {STRINGS} from "../constants";
import {FullButton} from "../components";
import {useNavigate} from "react-router-dom";
import {Verified as VerifiedIcon} from '@mui/icons-material';

const Wallet = () => {
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
                <Box>
                    <VerifiedIcon
                        sx={{
                            fontSize: '14rem',
                            fill: '#37a638'
                        }}
                    />
                </Box>
                <Box>
                    <Box mt={2}>
                        <Typography variant="body1">{STRINGS.ALL_SET.DESCRIPTION}</Typography>
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

export default Wallet;
