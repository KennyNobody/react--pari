import {classNames} from "5_shared/libs/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import {useTheme} from "0_app/provider/ThemeProvider";
import IconEye from "5_shared/assets/icons/eye.svg";
import React from "react";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames(cls.themeSwitcher, {}, [className])}>
            <button onClick={toggleTheme}>
                <IconEye className={'icon'} />
            </button>
        </div>
    );
};