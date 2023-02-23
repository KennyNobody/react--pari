import { screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation } from '5_shared/libs/renderWithTranslation/renderWithTranslation';
import MainPage from './MainPage';

describe('Logo', () => {
    test('Main-page render', () => {
        const MainPageWithTranslation = withTranslation()(MainPage);
        renderWithTranslation(<MainPageWithTranslation />);
        expect(screen.getByTestId('mainPage')).toBeInTheDocument();
    });
});
