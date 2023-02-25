import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SectionLoader } from './SectionLoader';

export default {
    title: 'widgets/SectionLoader',
    component: SectionLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SectionLoader>;

const Template: ComponentStory<typeof SectionLoader> = (args) => <SectionLoader {...args} />;

export const Regular = Template.bind({});
Regular.args = {

};
