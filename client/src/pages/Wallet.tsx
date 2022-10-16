import {WalletLayout} from "../layouts";
import {Avatar, Box} from "@mui/material";
import {CoinCard, CopiableAddress, FakeTab, NetworkSelector} from "../components";
import {useState} from "react";
import {useRecoilValue} from "recoil";
import {GlobalState} from "../states";

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

const Wallet = () => {
    const [network, setNetwork] = useState<string>(NETWORKS[0].value);
    const {address} = useRecoilValue(GlobalState);

    return (
        <WalletLayout
            topNode={
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <CopiableAddress address={address} />
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
                    <Box width="100%" pt={3}>
                        {BALANCES.map((balance) => {
                            return <CoinCard key={balance.ticker} {...balance} />
                        })}
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
                    <FakeTab activeIndex={0} />
                </Box>
            }
        />
    )
}

export default Wallet;
