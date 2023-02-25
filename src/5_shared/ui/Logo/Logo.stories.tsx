import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from './Logo';

export default {
    title: 'shared/Logo',
    component: Logo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Header = Template.bind({});
Header.args = {
    type: 'header',
};

export const Footer = Template.bind({});
Footer.args = {
    type: 'footer',
};
