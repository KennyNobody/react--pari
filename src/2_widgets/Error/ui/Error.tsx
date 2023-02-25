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
        <div className={classNames(cls.error, {}, [])}>
            <h1 className={classNames(cls.text, {}, [])}>
                {t('errorTitle')}
            </h1>

            <button className={classNames(cls.button, {}, [])} type="button" onClick={reloadPage}>
                {t('refresh page')}
            </button>
        </div>
    );
};
