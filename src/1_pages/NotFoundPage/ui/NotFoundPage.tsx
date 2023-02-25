import { useTranslation } from 'react-i18next';
import { classNames } from '5_shared/libs/classNames/classNames';
import cls from './NotFountPage.module.scss';

function NotFoundPage() {
    const { t } = useTranslation();

    return (
        <main className={classNames(cls.main, {}, [])}>
            <section className="section-404">
                <div className="container">
                    <div>
                        {t('titleNotFoundPage')}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default NotFoundPage;
