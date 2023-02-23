import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('Button render', () => {
        render(<Button text="isButton" />);
        expect(screen.getByText('isButton')).toBeInTheDocument();
        screen.debug();
    });
});
