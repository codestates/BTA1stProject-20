const PORT = 3200;
const ENDPOINTS = {
    NEW_MNEMONIC: `http://localhost:${PORT}/api/wallet/mnemonic`,
    NEW_WALLET: `http://localhost:${PORT}/api/wallet/create`,
}

export default ENDPOINTS;
