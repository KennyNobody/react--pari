import {useTranslation} from "react-i18next";

function MainPage() {
    const { t } = useTranslation();

    return (
        <div>
            {t('titleMainPage')}
        </div>
    );
}

export default MainPage;