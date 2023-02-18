import { RouteProps } from 'react-router-dom';
import { MainPage } from '1_pages/MainPage';
import { NewsPage } from '1_pages/NewsPage';
import { StadiumPage } from '1_pages/StadiumPage';
import { NotFoundPage } from '1_pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    NEWS = 'news',
    STADIUM = 'stadium',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NEWS]: '/news/',
    [AppRoutes.STADIUM]: '/stadium/',
    [AppRoutes.NOT_FOUND]: '*',
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
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
