import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '5_shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '0_app/provider/ThemeProvider';
import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '#',
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Regular = Template.bind({});
Regular.args = {
    label: 'Regular',
    size: 'medium',
    theme: 'regular',
};

export const Inverted = Template.bind({});
Inverted.args = {
    label: 'Regular',
    size: 'medium',
    theme: 'inverted',
};
Inverted.decorators = [ThemeDecorator(Theme.SPECIAL)];
