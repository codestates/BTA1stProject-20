import {WalletLayout} from "../layouts";
import {Avatar, Box, Typography} from "@mui/material";
import {ButtonPair, CopiableAddress, FakeTab, NetworkSelector} from "../components";
import {useMemo, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {SendCoinInput} from "../components";

const ADDRESS = '0x81b6C7EF567954A221bfb7adBe63fD1b44A68Bb4';
const NETWORKS = [
    {
        label: 'Immutable X Layer 2 (Goerli-testnet)',
        value: 'Immutable X',
        disabled: false,
    },
    {
        label: 'Immutable X Layer 2 (Mainnet)',
        value: 'Immutable X Main',
        disabled: true,
    },
];

const BALANCES = [
    {
        name: 'Immutable X',
        ticker: 'IMX',
        balance: '0.050000',
    }
]

const useQueryParams = () => {
    const {search} = useLocation();
    const searchParams = useMemo(() => new URLSearchParams(search), [search]);

    return {
        address: searchParams.get('address'),
        amount: searchParams.get('amount'),
    }
}

const SendConfirm = () => {
    const [network, setNetwork] = useState<string>(NETWORKS[0].value);
    const navigate =  useNavigate();
    const {address, amount} = useQueryParams();
    console.log(address, amount);

    return (
        <WalletLayout
            topNode={
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <CopiableAddress address={ADDRESS} />
                    <Avatar
                        sx={{
                            width: 25,
                            height: 25,
                        }}
                        alt="$IMX"
                        src="/imx_icon_334.png"
                    />
                </Box>
            }
            middleNode={
                <Box
                    height="100%"
                    id="box"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{transform: 'translateY(-20px)'}}
                >
                    <Box>
                        <NetworkSelector
                            options={NETWORKS}
                            value={network}
                            onChange={(e) => {
                                setNetwork(e.target.value as string);
                            }}
                        />
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center" gap={3} mt={-10} width="100%">
                        <Box display="flex" flexDirection="column" alignItems="center" gap={0.5}>
                            <Box mt={3}>
                                <Typography fontWeight={700} variant="h6">{`송금하기`}</Typography>
                            </Box>
                            <Avatar
                                sx={{
                                    width: 40,
                                    height: 40,
                                }}
                                alt="$IMX"
                                src="/imx_icon_334.png"
                            />
                        </Box>
                        <Box width="100%" display="flex" flexDirection="column" gap={2}>
                            <SendCoinInput
                                inputType="address"
                                label="보내는 주소"
                                variant="outlined"
                            />
                            <SendCoinInput
                                inputType="amount"
                                label="금액"
                                placeholder="0"
                                variant="outlined"
                                unit={''}
                            />
                        </Box>
                    </Box>
                    <Box width="100%">
                        <ButtonPair
                            onPrevButtonClick={() => {
                                navigate(-1);
                            }}
                            onNextButtonClick={() => {

                            }}
                            disabled={false}
                        />
                    </Box>
                </Box>
            }
            bottomNode={
                <Box
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <FakeTab activeIndex={1} />
                </Box>
            }
        />
    )
}

export default SendConfirm;
