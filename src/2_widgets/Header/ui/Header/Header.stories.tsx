import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
    title: 'widget/Header',
    component: Header,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Regular = Template.bind({});
Regular.args = {};
