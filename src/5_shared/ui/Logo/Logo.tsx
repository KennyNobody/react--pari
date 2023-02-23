import { classNames } from '5_shared/libs/classNames/classNames';
import { Link } from 'react-router-dom';

import LogoColor from '5_shared/assets/icons/logo-color.svg';
import LogoLight from '5_shared/assets/icons/logo-light.svg';

import cls from './Logo.module.scss';

type LogoTypeProps = 'header' | 'footer';

interface LogoProps {
    className?: string;
    type: LogoTypeProps
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
            to="/"
            data-testid="logoHeader"
            className={classNames(cls.logoHeader, {}, [className])}
        >
            <LogoColor />
        </Link>
    );

    return (type === 'header') ? activeLogo : staticLogo;
}
