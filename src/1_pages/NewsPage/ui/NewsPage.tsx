import { useTranslation } from 'react-i18next';

function NewsPage() {
    const { t } = useTranslation();

    return (
        <main>
            <section className="section-news">
                <div className="container">
                    {t('titleNewsPage')}
                </div>
            </section>
        </main>
    );
}

export default NewsPage;
