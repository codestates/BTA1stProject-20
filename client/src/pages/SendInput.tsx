import {WalletLayout} from "../layouts";
import {Avatar, Box, Typography} from "@mui/material";
import {CoinCard, CopiableAddress, FakeTab, NetworkSelector} from "../components";
import {useState} from "react";
import {useLocation} from "react-router-dom";

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

const SendInput = () => {
    const [network, setNetwork] = useState<string>(NETWORKS[0].value);
    const location = useLocation();
    const {name, ticker, balance} = location.state;

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
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    sx={{transform: 'translateY(-20px)'}}
                >
                    <NetworkSelector
                        options={NETWORKS}
                        value={network}
                        onChange={(e) => {
                            setNetwork(e.target.value as string);
                        }}
                    />
                    <Box mt={3}>
                        <Typography fontWeight={700} variant="h6">{`\$${ticker}송금하기`}</Typography>
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

export default SendInput;
