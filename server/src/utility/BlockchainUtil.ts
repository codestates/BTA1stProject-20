const axios = require('axios').default;
import { Transaction } from 'ethereumjs-tx';

const chain = 'goerli';

export default class BlcokchainUtil {

    static async getCurrentGasPrices(){ 
        try {
            let response = await axios.get("https://www.gwei.at/api/gas")
            let gasPrice = response.data.gasData.gasPrices;
        
            return gasPrice; 
        }
        catch(err) {
            throw(err);
        }
    }

    static async sendSignedTransaction(params: any, fromPrivateKey: Buffer, web3: any) {
        try {           
            const tx = new Transaction(params, { chain: chain });

            tx.sign(fromPrivateKey);

            const serializedTx = tx.serialize();
            const raw = '0x' + serializedTx.toString('hex');

            let result = await web3.eth.sendSignedTransaction(raw, (error: any, data: any) => {

                console.log("data:", data);

            });

            return { status: true, txHash: result.transactionHash };
        }
        catch(err: any) {
            throw(err);
        }
    }
}