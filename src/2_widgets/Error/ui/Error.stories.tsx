import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Error } from './Error';

export default {
    title: 'widget/Error',
    component: Error,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Regular = Template.bind({});
Regular.args = {};
