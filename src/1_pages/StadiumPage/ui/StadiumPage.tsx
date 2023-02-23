import { useTranslation } from 'react-i18next';

function StadiumPage() {
    const { t } = useTranslation();

    return (
        <main>
            <section className="section-about">
                <div className="container">
                    {t('titleStadiumPage')}
                </div>
            </section>
        </main>
    );
}

export default StadiumPage;
