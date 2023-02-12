import {classNames} from "5_shared/libs/classNames/classNames";
import cls from "./Footer.module.scss";
import {useTranslation} from "react-i18next";

interface FooterProps {
    className?: string
}

export const Footer = ({className}: FooterProps) => {
    const { t, i18n } = useTranslation();

    return (
        <footer className={classNames(cls.footer, {}, [className])}>
            <div className="container">
                {t('footer')}
            </div>
        </footer>
    );
};