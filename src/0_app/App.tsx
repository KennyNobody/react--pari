import React, { Suspense } from 'react';
import './styles/index.scss';
import i18n from "5_shared/config/i18n/i18n";

import {classNames} from "5_shared/libs/classNames/classNames";
import {useTheme} from "0_app/provider/ThemeProvider";
import {AppRouter} from "0_app/provider/router";

import {Header} from '2_widgets/Header/'
import {Footer} from "2_widgets/Footer";

function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={""}>
                <Header />
                <AppRouter />
                <Footer/>
            </Suspense>
        </div>
    );
}

export default App;