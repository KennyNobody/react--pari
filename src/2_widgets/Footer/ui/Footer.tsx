import { classNames } from '5_shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Logo } from '5_shared/ui/Logo/Logo';
import cls from './Footer.module.scss';

interface FooterProps {
    className?: string
}

export function Footer({ className }: FooterProps) {
    const { t } = useTranslation();

    return (
        <footer className={classNames(cls.footer, {}, [className])}>
            <div className="container">
                <div className={classNames(cls.footerContent)}>
                    <Logo type="footer" />
                    {t('footer')}
                </div>
            </div>
        </footer>
    );
}
