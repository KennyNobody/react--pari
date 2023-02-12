import {classNames} from "5_shared/libs/classNames/classNames";
import cls from "./LanguageSwitcher.module.scss";
import {useTranslation} from "react-i18next"
import React from "react";

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher = ({className}: LanguageSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggleLanguage = (val: string) => {
        i18n.changeLanguage(i18n.language = val);
    }

    return (
        <select className={classNames(cls.select)} onChange={e => toggleLanguage(e.target.value)}>
            <option value="ru">RUS</option>
            <option value="en">ENG</option>
        </select>
    );
};