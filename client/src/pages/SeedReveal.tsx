import {useNavigate} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import {DefaultLayout} from "../layouts";
import {ButtonPair, MnemonicInput} from "../components";
import {STRINGS} from "../constants";
import {copyToClipboard} from "../utils";

const SeedReveal = () => {
    const navigate = useNavigate();

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
                        <Typography variant="h4">비밀 복구 구문</Typography>
                    </Box>
                    <Box mt={2}>
                        <Typography
                            whiteSpace="break-spaces"
                            variant="body1"
                        >
                            {STRINGS.SEED_REVEAL.DESCRIPTION}
                        </Typography>
                    </Box>
                    <Box
                        mt={3}
                        width="100%"
                        gap={4}
                        display="flex"
                        flexDirection="column"
                    >
                        <MnemonicInput
                            label="seed phrase"
                            value={"test ".repeat(12)}
                            onCopyText={() => {
                                copyToClipboard("test ".repeat(12)).then(() => {
                                    alert('copied');
                                });
                            }}
                        />
                    </Box>
                    <Box mt={2}>
                        <Typography
                            whiteSpace="break-spaces"
                            variant="body2"
                            color="grey.700"
                        >
                            {STRINGS.SEED_REVEAL.WARNING}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <ButtonPair
                        onPrevButtonClick={() => {
                            navigate(-1);
                        }}
                        onNextButtonClick={() => {
                            // mutate();
                        }}
                        disabled={false}
                    />
                </Box>
            </Box>
        </DefaultLayout>
    )
}

export default SeedReveal;
