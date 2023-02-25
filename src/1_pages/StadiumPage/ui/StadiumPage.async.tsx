import { lazy } from 'react';

export const StadiumPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./StadiumPage')), 1500);
}));
