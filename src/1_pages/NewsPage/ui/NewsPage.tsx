import { useTranslation } from 'react-i18next';
import { classNames } from '5_shared/libs/classNames/classNames';
import cls from './NewsPage.module.scss';

function NewsPage() {
    const { t } = useTranslation();

    return (
        <main className={classNames(cls.main, {}, [])}>
            <section className="section-news">
                <div className="container">
                    {t('titleNewsPage')}
                </div>
            </section>
        </main>
    );
}

export default NewsPage;
