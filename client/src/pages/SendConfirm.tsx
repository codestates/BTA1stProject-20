import {WalletLayout} from "../layouts";
import {Avatar, Box, Typography} from "@mui/material";
import {ButtonPair, CopiableAddress, FakeTab, NetworkSelector} from "../components";
import {useMemo, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {GlobalState} from "../states";
import {useRecoilValue} from "recoil";

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
    const {address: myAddress} = useRecoilValue(GlobalState);
    const navigate = useNavigate();
    const {address, amount} = useQueryParams();
    const {ticker} = useParams();

    return (
        <WalletLayout
            topNode={
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <CopiableAddress address={myAddress} />
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
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="left"
                        gap={2}
                        mt={-20}
                        width="100%"
                    >
                        <Box>
                            <Typography variant="h5">Send Address</Typography>
                            <Typography color="text.secondary" variant="subtitle2">{address}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h5">Amount</Typography>
                            <Typography color="text.secondary" variant="body1">{`${amount} ${ticker}`}</Typography>
                        </Box>
                    </Box>
                    <Box width="100%">
                        <ButtonPair
                            nextButtonLabel="확인 완료"
                            onPrevButtonClick={() => {
                                navigate(-1);
                            }}
                            onNextButtonClick={() => {
                                alert('송금 api 호출');
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
