import { useTranslation } from 'react-i18next';

function NotFoundPage() {
    const { t } = useTranslation();

    return (
        <section className="section-404">
            <div className="container">
                <div>
                    {t('titleNotFoundPage')}
                </div>
            </div>
        </section>
    );
}

export default NotFoundPage;
