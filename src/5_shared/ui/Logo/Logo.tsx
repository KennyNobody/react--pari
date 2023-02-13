import { classNames } from '5_shared/libs/classNames/classNames';
import { Link } from 'react-router-dom';
import cls from './Logo.module.scss';

interface LogoProps {
    className?: string
}

export function Logo({ className }: LogoProps) {
    const staticLogo = (
        <div className={classNames(cls.logo, {}, [className])}>
            x
        </div>
    );

    const activeLogo = (
        <Link to="./" className={classNames(cls.logo, {}, [className])}>
            x
        </Link>
    );

    return activeLogo;
}
