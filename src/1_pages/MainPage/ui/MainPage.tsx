import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation();

    return (
        <main data-testid="mainPage">
            <section className="section-intro">
                <div className="container">
                    {t('titleMainPage')}
                </div>
            </section>
            <section className="section-news">
                <div className="container">
                    {t('titleNews')}
                </div>
            </section>
            <section className="section-shop">
                <div className="container">
                    {t('titleShop')}
                </div>
            </section>
        </main>
    );
}

export default MainPage;
