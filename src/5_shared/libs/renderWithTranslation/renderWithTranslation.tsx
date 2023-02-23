import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nTesting from '5_shared/config/i18n/i18nTesting';

export function renderWithTranslation(component: ReactNode) {
    return render(
        <I18nextProvider i18n={i18nTesting}>
            {component}
        </I18nextProvider>,
    );
}
