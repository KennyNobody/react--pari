import { useTranslation } from 'react-i18next';

function NotFoundPage() {
    const { t } = useTranslation();

    return (
        <div>
            {t('titleNotFoundPage')}
        </div>
    );
}

export default NotFoundPage;
