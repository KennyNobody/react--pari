import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainPage from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage />;

export const Regular = Template.bind({});
Regular.args = {};
