import {classNames} from "5_shared/libs/classNames/classNames";
import cls from "./Footer.module.scss";

interface FooterProps {
    className?: string
}

export const Footer = ({className}: FooterProps) => {
    return (
        <div className={classNames(cls.footer, {}, [className])}>
            ПОДВАЛ
        </div>
    );
};