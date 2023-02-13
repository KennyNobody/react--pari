import { useTranslation } from 'react-i18next';

function NewsPage() {
    const { t } = useTranslation();

    return (
        <div>
            {t('titleNewsPage')}
        </div>
    );
}

export default NewsPage;
