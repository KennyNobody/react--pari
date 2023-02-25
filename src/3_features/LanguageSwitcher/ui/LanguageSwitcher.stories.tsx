import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LanguageSwitcher } from './LanguageSwitcher';

export default {
    title: 'features/LanguageSwitcher',
    component: LanguageSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LanguageSwitcher>;

const Template: ComponentStory<typeof LanguageSwitcher> = (args) => <LanguageSwitcher {...args} />;

export const Regular = Template.bind({});
Regular.args = {

};
