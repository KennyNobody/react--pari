import { classNames } from '5_shared/libs/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps {
    className?: string,
    text?: string
}

export const Button = ({ className, text }: ButtonProps) => (
    <button className={classNames(cls.button, {}, [className])} type="button">
        {text}
    </button>
);
