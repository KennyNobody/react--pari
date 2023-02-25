import { classNames } from '5_shared/libs/classNames/classNames';
import { Link } from 'react-router-dom';
import cls from './Button.module.scss';

type ButtonType = 'link' | 'button';
type ButtonStyle = 'regular' | 'inverted';
type ButtonSize = 'small' | 'medium' | 'large' | 'auto' | 'full';

interface ButtonProps {
    size?: ButtonSize;
    className?: string;
    label: string;
    theme?: ButtonStyle;
    typeEl: ButtonType;
}

export const Button = ({
    className, label, size = 'auto', theme = 'regular', typeEl,
}: ButtonProps) => {
    const buttonContent = (
        <>
            <span className={classNames(cls.button__top)} />
            <span className={classNames(cls.button__text)}>
                {label}
            </span>
            <span className={classNames(cls.button__bottom)} />
        </>
    );

    if (typeEl === 'link') {
        return (
            <Link className={classNames(cls.button, {}, [className, cls[size], cls[theme]])} to="/">
                {buttonContent}
            </Link>
        );
    }

    return (
        <button className={classNames(cls.button, {}, [className, cls[size], cls[theme]])} type="button">
            {buttonContent}
        </button>
    );
};
