import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '0_app/provider/ThemeProvider/index';
import App from './0_app/App';
import './5_shared/config/i18n/i18n';
import { ErrorBoundary } from './0_app/provider/ErrorBoundary';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
