import { useTranslation } from 'react-i18next';
import { Button } from '5_shared/ui/Button/Button';

function MainPage() {
    const { t } = useTranslation();

    return (
        <main data-testid="mainPage">
            <section className="section-intro">
                <div className="container">
                    <Button label="Купить билет" size="small" typeEl="link" />
                    <br />
                    <Button label="Оставить заявку" size="medium" typeEl="button" theme="inverted" />
                    <br />
                    <Button label="Перейти к альбомам" size="large" typeEl="button" />
                    <br />
                    <Button label="Я кнопочка" typeEl="button" />
                    <br />
                    <Button label="Я кнопочка" size="full" typeEl="button" />
                    <br />
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
