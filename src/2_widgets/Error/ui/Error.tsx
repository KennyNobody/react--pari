import { classNames } from '5_shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Error.module.scss';

interface ErrorProps {
    className?: string
}

export const Error = ({ className }: ErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.error, {}, [className])}>
            <h1 className={classNames(cls.text, {}, [className])}>
                {t('errorTitle')}
            </h1>
            <button className={classNames(cls.button, {}, [className])} type="button" onClick={reloadPage}>
                {t('refresh page')}
            </button>
        </div>
    );
};
