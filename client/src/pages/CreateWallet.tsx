import {useEffect, useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import {useMutation} from "react-query";
import {DefaultLayout} from "../layouts";
import {ButtonPair, PasswordInput} from "../components";
import {ENDPOINTS} from "../constants";

const CreateWallet = () => {
    const navigate =  useNavigate();

    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');

    const getMnemonic = async () => {
        const res = await fetch(ENDPOINTS.NEW_NEMONIC, {method: 'POST'});
        const mnemonic = await res.json();
        const res2 = await fetch(ENDPOINTS.NEW_WALLET, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({password, ...mnemonic})
        });
        const result = await res2.json();
        return {mnemonic, result};
    };

    const {data, mutate, isLoading, error} = useMutation(getMnemonic, {
        // onSuccess: data => {
            // console.log(data);
        // }
    });

    const passwordError = useMemo(() => password.length > 0 && password.length < 8, [password]);
    const passwordConfirmError = useMemo(() => passwordError || password !== passwordConfirm, [passwordError, password, passwordConfirm]);

    useEffect(() => {
        console.log({data, isLoading, error});
    }, [data, isLoading, error]);

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
                        <Typography variant="h4">비밀번호 만들기</Typography>
                    </Box>
                    <Box
                        width="100%"
                        gap={4}
                        display="flex"
                        flexDirection="column"
                    >
                        <PasswordInput
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            error={passwordError}
                            label="비밀번호(8자 이상)"
                            variant="outlined"
                        />
                        <PasswordInput
                            label={`비밀번호 확인${passwordConfirmError ? ' (비밀번호가 맞지 않습니다.)' : ''}`}
                            value={passwordConfirm}
                            onChange={(e) => {
                                setPasswordConfirm(e.target.value);
                            }}
                            variant="outlined"
                            error={passwordConfirmError}
                        />
                    </Box>
                </Box>
                <Box>
                    <ButtonPair
                        onPrevButtonClick={() => {
                            navigate(-1);
                        }}
                        onNextButtonClick={() => {
                            mutate();
                        }}
                        disabled={password.length === 0 || passwordError || passwordConfirmError}
                    />
                </Box>
            </Box>
        </DefaultLayout>
    )
}

export default CreateWallet;
