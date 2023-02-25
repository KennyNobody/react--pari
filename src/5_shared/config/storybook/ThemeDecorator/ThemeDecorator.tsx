import { Story } from '@storybook/react';
import { Theme } from '0_app/provider/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
