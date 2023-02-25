import { useTranslation } from 'react-i18next';
import { classNames } from '5_shared/libs/classNames/classNames';
import cls from './StadiumPage.module.scss';

function StadiumPage() {
    const { t } = useTranslation();

    return (
        <main className={classNames(cls.main, {}, [])}>
            <section className="section-about">
                <div className="container">
                    {t('titleStadiumPage')}
                </div>
            </section>
        </main>
    );
}

export default StadiumPage;
