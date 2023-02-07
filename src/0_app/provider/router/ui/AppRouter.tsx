import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "1_pages/AboutPage";
import {MainPage} from "1_pages/MainPage";
import {routeConfig} from "5_shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                    key={path}
                    path={path}
                    element={element}
                    />

                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
