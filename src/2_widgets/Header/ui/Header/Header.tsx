import {classNames} from "5_shared/libs/classNames/classNames";
import cls from "./Header.module.scss";
import {Link} from "react-router-dom";
import React from "react";
import {useTheme} from "0_app/provider/ThemeProvider";
import {Logo} from "5_shared/ui/Logo/Logo";
import {ThemeSwitcher} from "5_shared/ui/ThemeSwitcher";

interface HeaderProps {
    className?: string
}

export const Header = ({className}: HeaderProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <header className={classNames(cls.header, {}, [className])}>
            <div className="container">
                <div className={classNames(cls.navbar)}>
                    <Logo />
                    <nav className={classNames(cls.nav)}>
                        <Link className={classNames(cls.link)} to={'/'}>Главная</Link>
                        <Link className={classNames(cls.link)} to={'/news'}>Новости</Link>
                        <Link className={classNames(cls.link)} to={'/stadium'}>Стадион</Link>
                    </nav>
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    );
};