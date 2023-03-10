import { classNames } from '5_shared/libs/classNames/classNames';
import { Link } from 'react-router-dom';

import LogoColor from '5_shared/assets/icons/logo-color.svg';
import LogoLight from '5_shared/assets/icons/logo-light.svg';

import { RoutePath } from '5_shared/config/routeConfig/routeConfig';
import cls from './Logo.module.scss';

type LogoType = 'header' | 'footer';

interface LogoProps {
    className?: string;
    type: LogoType
}

export function Logo({ className, type }: LogoProps) {
    const staticLogo = (
        <div
            data-testid="logoFooter"
            className={classNames(cls.logoFooter, {}, [className])}
        >
            <LogoLight />
        </div>
    );

    const activeLogo = (
        <Link
            to={RoutePath.main}
            data-testid="logoHeader"
            className={classNames(cls.logoHeader, {}, [className])}
        >
            <LogoColor />
        </Link>
    );

    return (type === 'header') ? activeLogo : staticLogo;
}
