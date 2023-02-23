import { classNames } from '5_shared/libs/classNames/classNames';
import { useTheme } from '0_app/provider/ThemeProvider';
import IconEye from '5_shared/assets/icons/eye.svg';
import React from 'react';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { toggleTheme } = useTheme();

    return (
        <button className={classNames(cls.button, {}, [className])} onClick={toggleTheme} type="button">
            <IconEye className="icon" />
        </button>
    );
}
