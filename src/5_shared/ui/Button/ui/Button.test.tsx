import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('Button render', () => {
        render(<Button label="isButton" size="small" typeEl="button" />);
        expect(screen.getByText('isButton')).toBeInTheDocument();
        screen.debug();
    });
});
