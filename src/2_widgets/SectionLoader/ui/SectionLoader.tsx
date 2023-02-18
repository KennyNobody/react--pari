import { classNames } from '5_shared/libs/classNames/classNames';
import { Loader } from '5_shared/ui/Loader';
import cls from './SectionLoader.module.scss';

interface SectionLoaderProps {
    className?: string
}

export const SectionLoader = ({ className }: SectionLoaderProps) => (
    <section className={classNames(cls.section, {}, [className])}>
        <Loader />
    </section>
);
