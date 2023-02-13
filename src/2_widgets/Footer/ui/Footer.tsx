import { classNames } from '5_shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Footer.module.scss';

interface FooterProps {
    className?: string
}

export function Footer({ className }: FooterProps) {
    const { t } = useTranslation();

    return (
        <footer className={classNames(cls.footer, {}, [className])}>
            <div className="container">
                {t('footer')}
            </div>
        </footer>
    );
}
