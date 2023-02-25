import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NewsPage from './NewsPage';

export default {
    title: 'pages/NewsPage',
    component: NewsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NewsPage>;

const Template: ComponentStory<typeof NewsPage> = (args) => <NewsPage />;

export const Regular = Template.bind({});
Regular.args = {};
