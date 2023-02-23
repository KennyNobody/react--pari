import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Logo } from './Logo';

describe('Logo', () => {
    test('Logo header render', () => {
        render(<Logo type="header" />, { wrapper: MemoryRouter });
        expect(screen.getByTestId('logoHeader')).toBeInTheDocument();
        screen.debug();
    });

    test('Logo footer render', () => {
        render(<Logo type="footer" />);
        expect(screen.getByTestId('logoFooter')).toBeInTheDocument();
        screen.debug();
    });
});
