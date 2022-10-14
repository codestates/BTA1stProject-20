import express from "express";
const router = express.Router();

import WalletController from "../controller/walletController";

     // Wallet (지갑)
     router.get         ("/wallet/mnemonic"              ,WalletController.generateMnemonicCode     );
     router.get         ("/wallet/address/:index"              ,WalletController.getWalletAddress     );
     router.get         ("/wallet/balance"              ,WalletController.balanceOf     );
     router.post         ("/wallet/transfer"              ,WalletController.transfer     );


export default router;