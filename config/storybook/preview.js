import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/5_shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/5_shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/5_shared/config/storybook/RouterDecorator/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator('normal'));
