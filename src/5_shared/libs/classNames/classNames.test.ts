import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('test-class')).toBe('test-class');
    });

    test('with additional classes', () => {
        const expected = 'test-class class1 class2';
        expect(classNames('test-class', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'test-class class1 class2 hovered';
        expect(classNames('test-class', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'test-class class1 class2 hovered';
        expect(classNames('test-class', { hovered: true, scrollable: undefined }, ['class1', 'class2'])).toBe(expected);
    });
});
