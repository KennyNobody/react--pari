import { classNames } from '5_shared/libs/classNames/classNames';
import { NavLink } from 'react-router-dom';
import { Logo } from '5_shared/ui/Logo/Logo';
import { ThemeSwitcher } from '5_shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '3_features/LanguageSwitcher';
import { RoutePath } from '5_shared/config/routeConfig/routeConfig';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string
}

export function Header({ className }: HeaderProps) {
    const { t } = useTranslation();

    return (
        <header className={classNames(cls.header, {}, [className])}>
            <div className="container">
                <div className={classNames(cls.navbar)}>
                    <Logo className="logo-header" type="header" />
                    <nav className={classNames(cls.nav)}>
                        <NavLink className={classNames(cls.link)} to={RoutePath.main}>
                            {t('titleMainPage')}
                        </NavLink>
                        <NavLink className={classNames(cls.link)} to={RoutePath.news}>
                            {t('titleNewsPage')}
                        </NavLink>
                        <NavLink className={classNames(cls.link)} to={RoutePath.stadium}>
                            {t('titleStadiumPage')}
                        </NavLink>
                    </nav>
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
}
