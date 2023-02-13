import { useTranslation } from 'react-i18next';

function StadiumPage() {
    const { t } = useTranslation();

    return (
        <div>
            {t('titleStadiumPage')}
        </div>
    );
}

export default StadiumPage;
