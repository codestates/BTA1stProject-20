import {NetworkSelector} from './NetworkSelector';

import type {ComponentMeta, ComponentStory} from "@storybook/react";
import {DefaultLayout} from "../../layouts";
import {useState} from "react";

export default {
    title: 'Components/NetworkSelector',
    component: NetworkSelector,
} as ComponentMeta<typeof NetworkSelector>;

const Template: ComponentStory<typeof NetworkSelector> = (args) => {
    const {options}=args;
    const [value, setValue] = useState<string>(options[0]?.value ?? null);

    return (
        <DefaultLayout>
            <NetworkSelector
                value={value}
                onChange={(a) => {
                    setValue(a.target.value as string);
                }}
                options={options}
            />
        </DefaultLayout>
    );
}

export const NetworkSelectorStory = Template.bind({});
NetworkSelectorStory.args = {
    options: [
        {
            label: 'Immutable X Layer 2(Goerli-testnet)',
            value: 'Immutable X',
        },
        {
            label: 'Ethereum',
            value: 'Ethereum',
        }
    ]
}
NetworkSelectorStory.storyName='비밀번호 입력';

