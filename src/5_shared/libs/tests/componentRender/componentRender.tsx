import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import i18nTesting from '5_shared/config/i18n/i18nTesting';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

export interface renderOptions {
    route?: string
}

export function componentRender(component: ReactNode, options: renderOptions = {}) {
    const { route = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nTesting}>
                { component }
            </I18nextProvider>
        </MemoryRouter>,
    );
}
