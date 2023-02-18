import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '5_shared/config/routeConfig/routeConfig';
import { SectionLoader } from '2_widgets/SectionLoader';

function AppRouter() {
    return (
        <Suspense fallback={<SectionLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}

export default AppRouter;
