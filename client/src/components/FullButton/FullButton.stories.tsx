import React from 'react';

import {FullButton} from './FullButton';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'FullButton',
    component: FullButton,
};

export const Primary = () => <FullButton>text</FullButton>;
