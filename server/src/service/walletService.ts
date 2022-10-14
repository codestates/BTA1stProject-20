import lightwallet from 'eth-lightwallet'
import * as bip39 from 'bip39';
import Web3 from 'web3';
import HDKey from 'hdkey';
import BlcokchainUtil from '../utility/BlockchainUtil';

const chain = 'goerli';
let root : any;

export default class WalletService {
    
    static async generateMnemonicCode() {    
        try {
            let mnemomic = lightwallet.keystore.generateRandomSeed();
            return mnemomic;    
        }   
        catch (err) {
            throw(err);
        } 
    }

    static async setSeed(mnemonic: string) {  
        try {
            let seed = await bip39.mnemonicToSeed(mnemonic);
            root = await HDKey.fromMasterSeed(Buffer.from(seed));
            return;
        }      
        catch (err) {
            throw(err);
        }
    }

    static async getWalletAddress(index: string) {  
        try {
            let result;

            // test mnemonic 
            let mnemonic = "essay fiscal track riot huge rifle pizza card across maximum spot call";
            let password = '1234111';
            // await this.setSeed(mnemonic);

            // console.log("mnemonic:", mnemonic);

            // let privateKey = await this.getPrivateKey(index);
            // let publicKey = ethUtil.privateToPublic(privateKey);
            // let address = ethUtil.pubToAddress(publicKey);
            // return ethUtil.toChecksumAddress('0x' + address.toString('hex'));

            let testPassword;

            lightwallet.keystore.createVault(
                {
                    password,
                    seedPhrase: mnemonic,
                    hdPathString: "m/0'/0'/1'",
                },
                function (err, ks) {
                    ks.keyFromPassword(password, function (err, pwDerivedKey) {

                        testPassword = pwDerivedKey;

                        ks.generateNewAddress(pwDerivedKey, 1);
                        const address = ks.getAddresses().toString();
                        const keystore = ks.serialize();
                        const privateKey = ks.exportPrivateKey(address, pwDerivedKey);
                        const rand = Math.floor(Math.random() * 100);

                        // keystore.getSeed(pwDerivedKey)

                        // ks.
                        

                        console.log("address:", address);
                        console.log("privateKey:", privateKey);
                        
                    });
                }
            );
            
            // lightwallet.keystore.getSeed(testPassword)

            
            
            

    // console.log("addres)

        }      
        catch (err) {
            throw(err);
        }
    }


    static async getPrivateKey(index: string){
        try {
            console.log("privateKey - 1");
            console.log("root:", root);
            console.log("root:", root.derive);

            // let privateKey = await root.derive("m/44'/60'/0'/" + chain + "/" + index)._privateKey;
            // let privateKey = await root.derive("m/44'/60'/0'/" + chain + "/" + 1)._privateKey;
            let privateKey = root.derive("m/44'/60'/0'/" + chain + "/" + 1)._privateKey;

            console.log("privateKey - 2:", privateKey);

            return privateKey;
        }
        catch(err: any) {
            throw(err)
        }
    }


    static async balanceOf(walletAddress: string) {    
        try {
            let web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/89a4af9bde694d9aafa9156e1fcbf899'));

            let result = await web3.eth.getBalance(walletAddress);
            let balance : any = Web3.utils.fromWei(result, 'ether');  
            return balance;
        }   
        catch (err) {
            throw(err);
        } 
    }

    static async transfer(fromAddress: string, toAddress: string, amount: string) {    
        try {
            let web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/89a4af9bde694d9aafa9156e1fcbf899'));

            // test
            let fromPrivateKey = "6973eaa6abf34bcd64a4220340581e9bd14e3d7b12117f7d7339337847d51ab3";
            const fromPrivateKeyBuffer = Buffer.from(fromPrivateKey, "hex");

            const nonce = await web3.eth.getTransactionCount(fromAddress as string, 'pending');

            const gasInfo = await BlcokchainUtil.getCurrentGasPrices();

            const params = {
                nonce: nonce,
                value: web3.utils.toHex(web3.utils.toWei(amount, "ether")),
                gasPrice: web3.utils.toHex(gasInfo.fast * 10E7),
                gasLimit: web3.utils.toHex(21000),
                to: toAddress,
            };

            let result = await BlcokchainUtil.sendSignedTransaction(params, fromPrivateKeyBuffer, web3);

            return result;
        }   
        catch (err) {
            throw(err);
        } 
    }

}  