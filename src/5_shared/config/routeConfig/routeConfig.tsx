import { RouteProps } from 'react-router-dom';
import { MainPage } from '1_pages/MainPage';
import { NewsPage } from '1_pages/NewsPage';
import { StadiumPage } from '1_pages/StadiumPage';

export enum AppRoutes {
    MAIN = 'main',
    NEWS = 'news',
    STADIUM = 'stadium'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NEWS]: '/news/',
    [AppRoutes.STADIUM]: '/stadium/',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.NEWS]: {
        path: RoutePath.news,
        element: <NewsPage />,
    },
    [AppRoutes.STADIUM]: {
        path: RoutePath.stadium,
        element: <StadiumPage />,
    },
};
