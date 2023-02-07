import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss';

import {classNames} from "5_shared/libs/classNames/classNames";
import {useTheme} from "0_app/provider/ThemeProvider";
import {AppRouter} from "0_app/provider/router";

function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <AppRouter />
        </div>
    );
}

export default App;