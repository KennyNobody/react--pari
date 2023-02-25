import { useTranslation } from 'react-i18next';
import { classNames } from '5_shared/libs/classNames/classNames';
import cls from './MainPage.module.scss';

function MainPage() {
    const { t } = useTranslation();

    return (
        <main className={classNames(cls.main, {}, [])} data-testid="mainPage">
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
