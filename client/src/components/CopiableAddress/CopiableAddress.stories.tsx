import {CopiableAddress} from './CopiableAddress';
import {DefaultLayout} from "../../layouts";
import {copyToclipboard} from "../../utils";

import type {ComponentMeta, ComponentStory} from "@storybook/react";

const ADDRESS = '0x81b6C7EF567954A221bfb7adBe63fD1b44A68Bb4';

export default {
    title: 'Components/CopiableAddress',
    component: CopiableAddress,
} as ComponentMeta<typeof CopiableAddress>;

const Template: ComponentStory<typeof CopiableAddress> = (args) => {
    return (
        <DefaultLayout>
            <CopiableAddress {...args} />
        </DefaultLayout>
    );
}

export const CopiableAddressStory = Template.bind({});
CopiableAddressStory.args = {
    address: ADDRESS,
    onCopyText: () => {
        copyToclipboard(ADDRESS).then(() => {
            alert('copied');
        })
    },
}
CopiableAddressStory.storyName='비밀번호 입력';
