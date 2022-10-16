import {atom} from "recoil";

export const GlobalState = atom({
    key: 'userState',
    default: {
        mnemonic: '',
        // TODO: 제거!!!!!!!!!!
        address: '0x81b6C7EF567954A221bfb7adBe63fD1b44A68Bb4',
    },
});
