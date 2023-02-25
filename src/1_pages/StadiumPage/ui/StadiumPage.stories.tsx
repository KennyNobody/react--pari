import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StadiumPage from './StadiumPage';

export default {
    title: 'pages/StadiumPage',
    component: StadiumPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StadiumPage>;

const Template: ComponentStory<typeof StadiumPage> = (args) => <StadiumPage />;

export const Regular = Template.bind({});
Regular.args = {};
