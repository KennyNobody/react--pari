import { classNames } from '5_shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
    const { i18n } = useTranslation();

    const toggleLanguage = (val: string) => {
        i18n.changeLanguage(i18n.language = val);
    };

    return (
        <select
            className={classNames(cls.select)}
            onChange={(e) => toggleLanguage(e.target.value)}
            defaultValue={i18n.resolvedLanguage}
        >
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <option value="ru">RUS</option>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <option value="en">ENG</option>
        </select>

    );
}
