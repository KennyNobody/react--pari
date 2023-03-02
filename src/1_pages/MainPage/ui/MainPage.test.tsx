import { screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { componentRender } from '5_shared/libs/tests/componentRender/componentRender';
import MainPage from './MainPage';

describe('Logo', () => {
    test('Main-page render', () => {
        const MainPageWithTranslation = withTranslation()(MainPage);
        componentRender(<MainPageWithTranslation />);
        expect(screen.getByTestId('mainPage')).toBeInTheDocument();
    });
});
