import {classNames} from "5_shared/libs/classNames/classNames";
import cls from "./Logo.module.scss";
import {Link} from "react-router-dom";

interface LogoProps {
    className?: string
}

export const Logo = ({className}: LogoProps) => {

    let staticLogo = (
        <div className={classNames(cls.logo, {}, [className])}>
            x
        </div>
    )

    let activeLogo = (
        <Link to={"./"} className={classNames(cls.logo, {}, [className])}>
            x
        </Link>
    )

    return activeLogo;
};