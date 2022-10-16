const PORT = 3200;
const HOST = `http://localhost:${PORT}/api/wallet`;

const ENDPOINTS = {
    NEW_MNEMONIC: `${HOST}/mnemonic`,
    NEW_WALLET: `${HOST}/create`,
    BALANCE: `${HOST}/balance`,
}

export default ENDPOINTS;
