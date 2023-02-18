import { classNames } from '5_shared/libs/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(cls.loader, {}, [className])}>
        <div />
        <div />
    </div>
);
