import {atom} from "recoil";

export const GlobalState = atom({
    key: 'userState',
    default: {
        mnemonic: '',
        address: '',
    },
});
