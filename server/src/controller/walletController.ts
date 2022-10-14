import IController from '../interface/IController';
import BaseController from './baseController';
import ApiResponse from '../utility/apiResponse';
import WalletService from '../service/walletService';
import Util from '../utility/util';

export default class WalletController extends BaseController {         

    static generateMnemonicCode : IController = async (req, res) => {
        try {     
            let mnemonicCode = await WalletService.generateMnemonicCode();
            ApiResponse.result(res, mnemonicCode, 200);
        }
        catch (err: any) {            
            err.source = "WalletController:generateMnemonicCode";
            ApiResponse.error(res, err);
        }
    }

    static getWalletAddress : IController = async (req, res) => {
            const index = Util.String(req.params.index);
        try {     
            let walletAddress = await WalletService.getWalletAddress(index);
            ApiResponse.result(res, { walletAddress: walletAddress }, 200);
        }
        catch (err: any) {            
            err.source = "WalletController:getWalletAddress";
            ApiResponse.error(res, err);
        }
    }

    static balanceOf : IController = async (req, res) => {
        const walletAddress = Util.String(req.query.walletAddress);
        try {     
            let balance = await WalletService.balanceOf(walletAddress);
            ApiResponse.result(res, balance, 200);
        }
        catch (err: any) {            
            err.source = "WalletController:balanceOf";
            ApiResponse.error(res, err);
        }
    }

    static transfer : IController = async (req, res) => {
        const { fromAddress, toAddress, amount } = req.body;
        try {     
            await WalletService.transfer(fromAddress, toAddress, amount);
            ApiResponse.result(res, true, 201);
        }
        catch (err: any) {            
            err.source = "WalletController:transfer";
            ApiResponse.error(res, err);
        }
    }

}


