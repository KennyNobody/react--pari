import {classNames} from "5_shared/libs/classNames/classNames";
import cls from "./Header.module.scss";
import {Link} from "react-router-dom";
import {Logo} from "5_shared/ui/Logo/Logo";
import {ThemeSwitcher} from "5_shared/ui/ThemeSwitcher";
import {useTranslation} from "react-i18next"
import {LanguageSwitcher} from "3_features/LanguageSwitcher";

interface HeaderProps {
    className?: string
}

export const Header = ({className}: HeaderProps) => {
    const { t } = useTranslation();

    return (
        <header className={classNames(cls.header, {}, [className])}>
            <div className="container">
                <div className={classNames(cls.navbar)}>
                    <Logo />
                    <nav className={classNames(cls.nav)}>
                        <Link className={classNames(cls.link)} to={'/'}>
                            {t('titleMainPage')}
                        </Link>
                        <Link className={classNames(cls.link)} to={'/news'}>
                            {t('titleNewsPage')}
                        </Link>
                        <Link className={classNames(cls.link)} to={'/stadium'}>
                            {t('titleStadiumPage')}
                        </Link>
                    </nav>
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
};